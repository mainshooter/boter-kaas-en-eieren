$(document).ready(function() {
  var bord = {};
  // Inhoud van de borden
  var vakInhoud = new Array(9);
  vakInhoud[0] = "";
  vakInhoud[1] = "";
  vakInhoud[2] = "";
  vakInhoud[3] = "";
  vakInhoud[4] = "";
  vakInhoud[5] = "";
  vakInhoud[6] = "";
  vakInhoud[7] = "";
  vakInhoud[8] = "";
  vakInhoud[9] = "";
  // Welk stuk erin hoort
  var vakTeam = new Array(9);
  vakTeam[0] = "";
  vakTeam[1] = "";
  vakTeam[2] = "";
  vakTeam[3] = "";
  vakTeam[4] = "";
  vakTeam[5] = "";
  vakTeam[6] = "";
  vakTeam[7] = "";
  vakTeam[8] = "";
  vakTeam[9] = "";
  // Welk team
  var vakID = new Array(9);
  vakID[0] = "bord0";
  vakID[1] = "bord1";
  vakID[2] = "bord2";
  vakID[3] = "bord3";
  vakID[4] = "bord4";
  vakID[5] = "bord5";
  vakID[6] = "bord6";
  vakID[7] = "bord7";
  vakID[8] = "bord8";
  vakID[9] = "bord9";
  // Het ID van het vak

  bord.vakInhoud = vakInhoud;
  bord.vakTeam = vakTeam;
  bord.vakID = vakID;

  var spelernaam1 = "1";
  var spelernaam2 = "2";
  var gamemode;
  var thema;
  var turn = 1;
  var score1 = 0;
  var score2 = 0;
  // Alle variable die wat bij houden

  $("#sendname").click(function() {
    if ($("#spelername1").val() > "" && $("#spelername2").val() > "") {
      spelernaam1 = $("#spelername1").val();
      spelernaam2 = $("#spelername2").val();

      $("#stap1").hide();
      $("#stap2").show();
    }
    else {
      alert("Je bent wat vergeten!");
    }
  });
  $("#sendGamemode").click(function() {
    var player = document.getElementById('radioPlayer').checked;
    var pc = document.getElementById('radioPC').checked;
    // var on = document.getElementById("radioON").checked;

    if (pc == true) {
      gamemode = 'PC';
      $("#stap2").hide();
      $("#stap3").show();
    }
    else if (player == true) {
      gamemode = 'Player';
      $("#stap2").hide();
      $("#stap3").show();
    }
    else if (on == true) {
      gamemode = 'ON';
      $("#stap2").hide();
      $("#stap3").show();
    }
    else {
      alert("Je bent wat vergeten!");
    }
  });
  $("#sendThema").click(function() {
    var herfst = document.getElementById('herfst').checked;
    var winter = document.getElementById('winter').checked;
    var lente = document.getElementById('lente').checked;
    var zomer = document.getElementById('zomer').checked;
    if (herfst == true) {
      setThema('herfst');
    }
    else if(winter == true) {
      setThema('winter');
    }
    else if (lente == true) {
      setThema('lente');
    }
    else if (zomer == true) {
      setThema('zomer');
    }
    //Alle instellingen
  });
  $("#bord0").click(function() {
    placeKaas(0);
  });
  $("#bord1").click(function() {
    placeKaas(1);
  });
  $("#bord2").click(function() {
    placeKaas(2);
  });
  $("#bord3").click(function() {
    placeKaas(3);
  });
  $("#bord4").click(function() {
    placeKaas(4);
  });
  $("#bord5").click(function() {
    placeKaas(5);
  });
  $("#bord6").click(function() {
    placeKaas(6);
  });
  $("#bord7").click(function() {
    placeKaas(7);
  });
  $("#bord8").click(function() {
    placeKaas(8);
  });
  $("#bord9").click(function() {
    placeKaas(9);
  });
  // Klikjes op de borden registeren


  function placeKaas(posOnBord) {
    // posOnBord is de plek waar geklikt is
    if (turn == 1) {
      // Speler 1
      if (gamemode == "Player") {
        if (bord.vakInhoud[posOnBord] == "") {
          // Als er niks op het plekje in het bord staat
          bord.vakInhoud[posOnBord] = "X";
          bord.vakTeam[posOnBord] = "1";
          runBoard();
          checkWinner();
          turn = 2;
        }
        else {
          alert("Niet mogelijk");
        }
      }
      else if (gamemode == "PC") {
        if (bord.vakInhoud[posOnBord] == "") {
          // Als er niks op het plekje in het bord staat
          bord.vakInhoud[posOnBord] = "X";
          bord.vakTeam[posOnBord] = "1";
          runBoard();
          checkWinner();
          turn = 2;
          setTimeout(pcMove, 1000);
          // pcMove();
        }
      }
      else if (gamemode == "ON") {
        if (bord.vakInhoud[posOnBord] == "") {
          bord.vakInhoud[posOnBord] = "X";
          bord.vakTeam[posOnBord] = "1";
          runBoard();
          checkWinner();
          turn = 2;
          pcDef();
        }
      }
    }
    else if (turn == 2) {
      // Speler2 of PC
      if (gamemode == "Player") {
        if (bord.vakInhoud[posOnBord] == "") {
          bord.vakInhoud[posOnBord] = "O"
          bord.vakTeam[posOnBord] = "2";
          runBoard();
          checkWinner();
          turn = 1;
        }
        else {
          alert("Niet mogelijk");
        }
      }
    }
  }
  var teller = 0;
  function pcMove() {
    var randomnummer = Math.floor(Math.random() * 9) + 0;
    if (bord.vakInhoud[randomnummer] == "") {
      bord.vakInhoud[randomnummer] = "O";
      bord.vakTeam[randomnummer] = "2";
      runBoard();
      checkWinner();
      turn = 1;
    }
    else {
      pcMove();
    }
  }
  function runBoard() {
    console.log("runBoard");
    if (bord.vakInhoud[0] > "" && bord.vakInhoud[1] > "" && bord.vakInhoud[2] > ""
        && bord.vakInhoud[3] > "" && bord.vakInhoud[4] > "" && bord.vakInhoud[5] > ""
        && bord.vakInhoud[6] > "" && bord.vakInhoud[7] > "" && bord.vakInhoud[8] > "") {
          console.log("VOL!");
          setTimeout(resetGame, 3000);
    }
    else {
    // Update het bord volgens het object
      for (var i = 0; i < bord.vakInhoud.length; i++) {
        if (bord.vakInhoud[i] == "X") {
          $("#" + bord.vakID[i]).text("X");
        }
        else if (bord.vakInhoud[i] == "O") {
          $("#" + bord.vakID[i]).text("O");
        }
        else if (bord.vakInhoud[i] == "") {
          $("#" + bord.vakID[i]).text("");
        }
      }
    }
  }
  function checkWinner() {
    if (turn == 1) {
      lookWinner("X");
    }
    else if (turn == 2) {
      lookWinner("O")
    }
  }
  function lookWinner(turn) {
    // De beslissing of iemand heeft gewonnen
    if (bord.vakInhoud[0] == turn && bord.vakInhoud[1] == turn && bord.vakInhoud[2] == turn ||
        bord.vakInhoud[0] == turn && bord.vakInhoud[3] == turn && bord.vakInhoud[6] == turn ||
        bord.vakInhoud[0] == turn && bord.vakInhoud[4] == turn && bord.vakInhoud[8] == turn ||
        bord.vakInhoud[3] == turn && bord.vakInhoud[4] == turn && bord.vakInhoud[5] == turn ||
        bord.vakInhoud[6] == turn && bord.vakInhoud[7] == turn && bord.vakInhoud[8] == turn ||
        bord.vakInhoud[1] == turn && bord.vakInhoud[4] == turn && bord.vakInhoud[7] == turn ||
        bord.vakInhoud[2] == turn && bord.vakInhoud[5] == turn && bord.vakInhoud[8] == turn ||
        bord.vakInhoud[6] == turn && bord.vakInhoud[4] == turn && bord.vakInhoud[2] == turn ) {
          if (turn == "X") {
            setTimeout(WinAnimate(1), 3000);
          }
          else if(turn == "O") {
            setTimeout(WinAnimate(2), 3000);
          }
        }
      }
  function WinAnimate(winner) {
    // Winner is de persoon die heeft gewonnen in de functie checkWinner
    turn = 0;
    if (winner == 1) {
      winner = spelernaam1;
      scoreBoard(1);
    }
    else if (winner == 2) {
      winner = spelernaam2;
      scoreBoard(2);
    }
    $("#stap4").hide();
    $("#WinnerTitel").text("De winnaar is: " + winner + "!");
    $("#stap5").show();
    setTimeout(resetGame, 2000);
  }

  function scoreBoard(winner) {
    if (winner == 1) {
      score1++;
    }
    else if (winner == 2) {
      score2++;
    }
    $("#spelernaam1").text(spelernaam1);
    $("#spelernaam2").text(spelernaam2);
    $("#score1").text(score1);
    $("#score2").text(score2);
  }

  function resetGame() {
    for (var i = 0; i < bord.vakInhoud.length; i++) {
      bord.vakInhoud[i] = "";
      bord.vakTeam[i] = "";
      turn = 1;
    }
    runBoard();
    $("#stap5").hide();
    $("#stap4").show();
    console.log(bord);
  }
  scoreBoard(0);
});
function height() {
  // Regelt de hoogte
  document.getElementById('stap1').style.height = window.innerHeight + "px";
  document.getElementById('stap2').style.height = window.innerHeight + "px";
  document.getElementById('stap3').style.height = window.innerHeight + "px";
  document.getElementById('stap4').style.height = window.innerHeight + "px";
}
function setThema(sheet) {
  document.getElementById('pagestyle').setAttribute('href', "style/" + sheet + ".css");
  // Veranderd het style sheet
  $("#stap3").hide();
  $("#stap4").show();
}
