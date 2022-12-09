let player;
let pc;
let player2;
let counter1 = 0;

let playername;
let named = false;

let playerscore = 0;
let botscore = 0;

function Remiza(){
    console.log('remiza');
    $("#winner").text('Remiza');
    $("#winner").css('color', 'yellow');
    $("#history").append("<h4>" + counter1 + '. ' + playername + " - Remiza</h4>");
    checkscore();
}

function Vyhra(){
    console.log('player WIN');
    $("#winner").text('Vyhral si!');
    $("#winner").css('color', 'green');
    $("#history").append("<h4>" + counter1 + '. ' + playername + " - Vyhra</h4>");

    playerscore ++;
    $("#player").text(playerscore);
    checkscore();
}

function Prehra(){
    console.log('player2 WIN');
    $("#winner").text('Prehral si!');
    $("#winner").css('color', 'red');
    $("#history").append("<h4>" + counter1 + '. ' + playername + " - Prehra</h4>");

    botscore ++;
    $("#bot").text(botscore);
    checkscore();
}

function checkscore(){
    if(playerscore == 5){
        alert('Gratulujem! tvoje score je "5", Chces pokracovat dalej?')
    }else{
        // IDK PROSTE TO ZACALO FUNGOVAT KED SOM SEM DAL EMPTY ELSE...
    }
}

$(document).ready(function(){
    $("#start").click(function(){
        
        console.log("PLAY");

        $("#start").css('display', 'none');
        $("#player-name").css('display', 'block');
        $('#select').css('display', 'block');

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
        if(playername != ""){
            
            console.log("SELECT");
            $('#player-name-sc').text(playername);
            $('#scores').css('display', 'block');
            $('#history').css('display', 'block');

            counter1 ++;

            pc = Math.floor(Math.random() * 3);
            console.log(pc + 1);

            if(pc + 1 == 1){
                player2 = "K";
            }
            if(pc + 1 == 2){
                player2 = "P";
            }
            if(pc + 1 == 3){
                player2 = "N";
            }

            console.log('botko:' + player2);

            if(player == "K" && player2 == "K"){
                Remiza();
                $("#values").text(playername +': Kamen, Bot: Kamen');
            }

            if(player == "P" && player2 == "P"){
                Remiza();
                $("#values").text(playername +': Papier, Bot: Papier');
            }

            if(player == "N" && player2 == "N"){
                Remiza();
                $("#values").text(playername +': Noznice, Bot: Noznice');
            }

            // REMIZA UP

            if(player == "K" && player2 == "N"){
                Vyhra();
                $("#values").text(playername +': Kamen, Bot: Noznice');
            }

            if(player == "P" && player2 == "K"){
                Vyhra();
                $("#values").text(playername +': Papier, Bot: Kamen');
            }

            if(player == "N" && player2 == "P"){
                Vyhra();
                $("#values").text(playername +': Noznice, Bot: Papier');
            }

            // HRAC VYHRA UP

            if(player == "P" && player2 == "N"){
                Prehra();
                $("#values").text(playername +': Papier, Bot: Noznice');
            }

            if(player == "N" && player2 == "K"){
                Prehra();
                $("#values").text(playername +': Noznice, Bot: Kamen');
            }

            if(player == "K" && player2 == "P"){
                Prehra();
                $("#values").text(playername +': Kamen, Bot: Papier');
            }

            // BOTKO VYHRA UP

            $('#select').css('display', 'none');
            $("#player-name").css('display', 'none');
            $("#status").css('display', 'block');
            $("#next").css('display', 'block');

        }else{
            alert("Nastav si meno")
        }


    });

    $("#next").click(function(){
        $('#select').css('display', 'block');
        $("#next").css('display', 'none');
        $("#status").css('display', 'none');
    });

});