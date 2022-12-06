let player;
let pc;
let player2;
let counter1 = 0;

let playername;
let named = false;

let playerscore = 0;
let botscore = 0;

$(document).ready(function(){
    $("#start").click(function(){
        
        console.log("PLAY");

        $("#start").css('display', 'none');
        $("#player-name").css('display', 'block');
        $('#select').css('display', 'block');

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
                console.log('remiza');
                $("#winner").text('Remiza');
                $("#values").text(playername +': Kamen, Bot: Kamen');
                $("#winner").css('color', 'yellow');
                $("#history").append("<h4>" + counter1 + '. ' + playername + " - Remiza</h4>");
            }

            if(player == "P" && player2 == "P"){
                console.log('remiza');
                $("#winner").text('Remiza');
                $("#values").text(playername +': Papier, Bot: Papier');
                $("#winner").css('color', 'yellow');
                $("#history").append("<h4>" + counter1 + '. ' + playername + " - Remiza</h4>");
            }

            if(player == "N" && player2 == "N"){
                console.log('remiza');
                $("#winner").text('Remiza');
                $("#values").text(playername +': Noznice, Bot: Noznice');
                $("#winner").css('color', 'yellow');
                $("#history").append("<h4>" + counter1 + '. ' + playername + " - Remiza</h4>");
            }

            // REMIZA UP

            if(player == "K" && player2 == "N"){
                console.log('player WIN');
                $("#winner").text('Vyhral si!');
                $("#values").text(playername +': Kamen, Bot: Noznice');
                $("#winner").css('color', 'green');
                $("#history").append("<h4>" + counter1 + '. ' + playername + " - Vyhra</h4>");

                playerscore ++;
                $("#player").text(playerscore);
            }

            if(player == "P" && player2 == "K"){
                console.log('player WIN');
                $("#winner").text('Vyhral si!');
                $("#values").text(playername +': Papier, Bot: Kamen');
                $("#winner").css('color', 'green');
                $("#history").append("<h4>" + counter1 + '. ' + playername + " - Vyhra</h4>");

                playerscore ++;
                $("#player").text(playerscore);
            }

            if(player == "N" && player2 == "P"){
                console.log('player WIN');
                $("#winner").text('Vyhral si!');
                $("#values").text(playername +': Noznice, Bot: Papier');
                $("#winner").css('color', 'green');
                $("#history").append("<h4>" + counter1 + '. ' + playername + " - Vyhra</h4>");

                playerscore ++;
                $("#player").text(playerscore);
            }

            // HRAC VYHRA UP

            if(player == "P" && player2 == "N"){
                console.log('player2 WIN');
                $("#winner").text('Prehral si!');
                $("#values").text(playername +': Papier, Bot: Noznice');
                $("#winner").css('color', 'red');
                $("#history").append("<h4>" + counter1 + '. ' + playername + " - Prehra</h4>");

                botscore ++;
                $("#bot").text(botscore);
            }

            if(player == "N" && player2 == "K"){
                console.log('player2 WIN');
                $("#winner").text('Prehral si!');
                $("#values").text(playername +': Noznice, Bot: Kamen');
                $("#winner").css('color', 'red');
                $("#history").append("<h4>" + counter1 + '. ' + playername + " - Prehra</h4>");

                botscore ++;
                $("#bot").text(botscore);
            }

            if(player == "K" && player2 == "P"){
                console.log('player2 WIN');
                $("#winner").text('Prehral si!');
                $("#values").text(playername +': Kamen, Bot: Papier');
                $("#winner").css('color', 'red');
                $("#history").append("<h4>" + counter1 + '. ' + playername + " - Prehra</h4>");

                botscore ++;
                $("#bot").text(botscore);
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