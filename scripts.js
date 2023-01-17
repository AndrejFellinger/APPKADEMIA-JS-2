let player = null;
let comprandomnumber = null;
let counter = 0;

let computer = null;
let playername = null;
let named = false;

let playerscore = 0;
let botscore = 0;

function remiza(playerchoice, botchoice){
    console.log('remiza');
    $("#result").text('Remiza');
    $("#result").css('color', 'yellow');
    $("#history").append("<h4>" + counter + '. ' + playername + " - Remiza</h4>");
    $("#values").text(playername +' :' + playerchoice + ',  Bot: '+ botchoice);
    checkscore();
}

function vyhra(playerchoice, botchoice){
    console.log('player WIN');
    $("#result").text('Vyhral si!');
    $("#result").css('color', 'green');
    $("#history").append("<h4>" + counter + '. ' + playername + " - Vyhra</h4>");
    $("#values").text(playername +' :' + playerchoice + ',  Bot: '+ botchoice);

    playerscore ++;
    $("#player").text(playerscore);
    checkscore();
}

function prehra(playerchoice, botchoice){
    console.log('computer WIN');
    $("#result").text('Prehral si!');
    $("#result").css('color', 'red');
    $("#history").append("<h4>" + counter + '. ' + playername + " - Prehra</h4>");
    $("#values").text(playername +' :' + playerchoice + ',  Bot: '+ botchoice);

    botscore ++;
    $("#bot").text(botscore);
    checkscore();
}


function checkscore(){
    if(playerscore == 5){
        alert('Gratulujem! tvoje score je "5", Chces pokracovat dalej?')
    }
}

$(document).ready(function(){
    
    $("#start").click(function(){
        
        console.log("PLAY");

        $("#start").css('display', 'none');
        $("#player-name").css('display', 'block');
        $('#select').css('display', 'block');

    });

    $("#next").click(function(){
        $('#select').css('display', 'block');
        $("#next").css('display', 'none');
        $("#status").css('display', 'none');
    });

    $("#reset").click(function(){
        location.reload();
    });

    $("#k").click(function(){
        player = "K";
        console.log('hrac:' + player);
    });

    $("#p").click(function(){
        player = "P";
        console.log('hrac:' + player);
    });

    $("#n").click(function(){
        player = "N";
        console.log('hrac:' + player);
    });

    $(".selectbtn").click(function(){

        playername = $("#player-name").val();
        
        if(playername == ""){
            return(alert('nastav si meno'));

        }
    
        // let computer = null;

        console.log("SELECT");
        $('#player-name-sc').text(playername);
        $('#scores').css('display', 'block');
        $('#history').css('display', 'block');

        counter ++;

        comprandomnumber = Math.floor(Math.random() * 3);
        console.log(comprandomnumber);

        if(comprandomnumber == 0){
            computer = "K";
        }
        else if(comprandomnumber == 1){
            computer = "P";
        }
        else if(comprandomnumber == 2){
            computer = "N";
        }

        console.log('botko:' + computer);

        if(player == "K" && computer == "K"){
            remiza("Kamen", "Kamen");
        }

        else if(player == "P" && computer == "P"){
            remiza("Papier", "Papier");
        }

        else if(player == "N" && computer == "N"){
            remiza("Noznice", "Noznice");
        }


        else if(player == "K" && computer == "N"){
            vyhra("Kamen", "Noznice");
        }

        else if(player == "P" && computer == "K"){
            vyhra("Papier" ,"Kamen");
        }

        else if(player == "N" && computer == "P"){
            vyhra("Noznice", "Papier");
        }


        else if(player == "P" && computer == "N"){
            prehra("Papier", "Noznice");
        }

        else if(player == "N" && computer == "K"){
            prehra("Noznice", "Kamen");
        }

        else if(player == "K" && computer == "P"){
            prehra("Kamen", "Papier");
        }

        $('#select').css('display', 'none');
        $("#player-name").css('display', 'none');
        $("#status").css('display', 'block');
        $("#next").css('display', 'block');
    });
});