let player = null;
let comprandomnumber = null;
let counter = 0;

let playername = null;
let named = false;


let playerchoice = null;
let botrchoice = null;

let playerscore = 0;
let botscore = 0;

function remiza(){
    console.log('remiza');
    $("#result").text('Remiza');
    $("#result").css('color', 'yellow');
    $("#history").append("<h4>" + counter + '. ' + playername + " - Remiza</h4>");
    $("#values").text(playername +' :' + playerchoice + ',  Bot: '+ botrchoice);
    checkscore();
}

function vyhra(){
    console.log('player WIN');
    $("#result").text('Vyhral si!');
    $("#result").css('color', 'green');
    $("#history").append("<h4>" + counter + '. ' + playername + " - Vyhra</h4>");
    $("#values").text(playername +' :' + playerchoice + ',  Bot: '+ botrchoice);

    playerscore ++;
    $("#player").text(playerscore);
    checkscore();
}

function prehra(){
    console.log('computer WIN');
    $("#result").text('Prehral si!');
    $("#result").css('color', 'red');
    $("#history").append("<h4>" + counter + '. ' + playername + " - Prehra</h4>");
    $("#values").text(playername +' :' + playerchoice + ',  Bot: '+ botrchoice);

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
        playerchoice = "Kamen";
    });

    $("#p").click(function(){
        player = "P";
        console.log('hrac:' + player);
        playerchoice = "Papier";
    });

    $("#n").click(function(){
        player = "N";
        console.log('hrac:' + player);
        playerchoice = "Noznice";
    });

    $(".selectbtn").click(function(){

        playername = $("#player-name").val();
        
        if(playername == ""){
            return(alert('nastav si meno'));

        }
        else{

            let computer = null;

            console.log("SELECT");
            $('#player-name-sc').text(playername);
            $('#scores').css('display', 'block');
            $('#history').css('display', 'block');

            counter ++;

            comprandomnumber = Math.floor(Math.random() * 3);
            console.log(comprandomnumber);

            if(comprandomnumber == 0){
                computer = "K";
                botrchoice = "Kamen";
            }
            else if(comprandomnumber == 1){
                computer = "P";
                botrchoice = "Papier";
            }
            else if(comprandomnumber == 2){
                computer = "N";
                botrchoice = "Noznice";
            }

            console.log('botko:' + computer);

            if(player == "K" && computer == "K"){
                remiza();
                // $("#values").text(playername +': Kamen, Bot: Kamen');
            }

            else if(player == "P" && computer == "P"){
                remiza();
                // $("#values").text(playername +': Papier, Bot: Papier');
            }

            else if(player == "N" && computer == "N"){
                remiza();
                // $("#values").text(playername +': Noznice, Bot: Noznice');
            }


            else if(player == "K" && computer == "N"){
                vyhra();
                // $("#values").text(playername +': Kamen, Bot: Noznice');
            }

            else if(player == "P" && computer == "K"){
                vyhra();
                // $("#values").text(playername +': Papier, Bot: Kamen');
            }

            else if(player == "N" && computer == "P"){
                vyhra();
                // $("#values").text(playername +': Noznice, Bot: Papier');
            }


            else if(player == "P" && computer == "N"){
                prehra();
                // $("#values").text(playername +': Papier, Bot: Noznice');
            }

            else if(player == "N" && computer == "K"){
                prehra();
                // $("#values").text(playername +': Noznice, Bot: Kamen');
            }

            else if(player == "K" && computer == "P"){
                prehra();
                // $("#values").text(playername +': Kamen, Bot: Papier');
            }


            $('#select').css('display', 'none');
            $("#player-name").css('display', 'none');
            $("#status").css('display', 'block');
            $("#next").css('display', 'block');
        }


    });

});