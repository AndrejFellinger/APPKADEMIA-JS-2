let player = null;
let pc = null;
let player2 = null;
let counter1 = 0;

let playername = null;
let named = false;

let playerscore = 0;
let botscore = 0;

function remiza(){
    console.log('remiza');
    $("#result").text('Remiza');
    $("#result").css('color', 'yellow');
    $("#history").append("<h4>" + counter1 + '. ' + playername + " - Remiza</h4>");
    checkscore();
}

function vyhra(){
    console.log('player WIN');
    $("#result").text('Vyhral si!');
    $("#result").css('color', 'green');
    $("#history").append("<h4>" + counter1 + '. ' + playername + " - Vyhra</h4>");

    playerscore ++;
    $("#player").text(playerscore);
    checkscore();
}

function prehra(){
    console.log('player2 WIN');
    $("#result").text('Prehral si!');
    $("#result").css('color', 'red');
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

        if (playername == "") {
            return alert("zadaj meno")
            // Funguje to az po druhom kliknuti. prvy krat ti to nic nenapise ale ani ta to nepusti dalej, po druhom cliku uz ti to hodi alert...
        }

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
            else if(pc + 1 == 2){
                player2 = "P";
            }
            else if(pc + 1 == 3){
                player2 = "N";
            }

            console.log('botko:' + player2);

            if(player == "K" && player2 == "K"){
                remiza();
                $("#values").text(playername +': Kamen, Bot: Kamen');
            }

            else if(player == "P" && player2 == "P"){
                remiza();
                $("#values").text(playername +': Papier, Bot: Papier');
            }

            else if(player == "N" && player2 == "N"){
                remiza();
                $("#values").text(playername +': Noznice, Bot: Noznice');
            }

            // REMIZA UP

            if(player == "K" && player2 == "N"){
                vyhra();
                $("#values").text(playername +': Kamen, Bot: Noznice');
            }

            else if(player == "P" && player2 == "K"){
                vyhra();
                $("#values").text(playername +': Papier, Bot: Kamen');
            }

            else if(player == "N" && player2 == "P"){
                vyhra();
                $("#values").text(playername +': Noznice, Bot: Papier');
            }

            // HRAC VYHRA UP

            if(player == "P" && player2 == "N"){
                prehra();
                $("#values").text(playername +': Papier, Bot: Noznice');
            }

            else if(player == "N" && player2 == "K"){
                prehra();
                $("#values").text(playername +': Noznice, Bot: Kamen');
            }

            else if(player == "K" && player2 == "P"){
                prehra();
                $("#values").text(playername +': Kamen, Bot: Papier');
            }

            // BOTKO VYHRA UP

            $('#select').css('display', 'none');
            $("#player-name").css('display', 'none');
            $("#status").css('display', 'block');
            $("#next").css('display', 'block');

        }


    });

    $("#next").click(function(){
        $('#select').css('display', 'block');
        $("#next").css('display', 'none');
        $("#status").css('display', 'none');
    });

});