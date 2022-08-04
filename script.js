let elementos = document.querySelectorAll(".player-options div > img");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let playerOpt = "";
let inimigoOpt = "";
let result = 0;

function validateVictory() {
  let winner = document.querySelector(".winner");

  if (playerOpt == "paper") {
    if (inimigoOpt == "paper") {
      winner.innerHTML = "tie game";
    } else if (inimigoOpt == "scissor") {
      winner.innerHTML = "You lost the game, scissor beats paper";
      computerScore.innerHTML++;
    } else if (inimigoOpt == "rock") {
      winner.innerHTML = "You won, congratulations, paper beats rock";
      playerScore.innerHTML++;
    }
  }

  if (playerOpt == "scissor") {
    if (inimigoOpt == "paper") {
      winner.innerHTML = "You won, congratulations, scissor beats paper";
      playerScore.innerHTML++;
    } else if (inimigoOpt == "scissor") {
      winner.innerHTML = "tie game";
    } else if (inimigoOpt == "rock") {
      winner.innerHTML = "You lost the game, rock beats scissor";
      computerScore.innerHTML++;
    }
  }

  if (playerOpt == "rock") {
    if (inimigoOpt == "paper") {
      winner.innerHTML = "You lost the game, paper beats rock";
      computerScore.innerHTML++;
    } else if (inimigoOpt == "scissor") {
      winner.innerHTML = "You won, congratulations, rock beats scissor";
      playerScore.innerHTML++;
    } else if (inimigoOpt == "rock") {
      winner.innerHTML = "tie game";
    }
  }
}

function resetInimigo() {
  const enemyOptions = document.querySelectorAll(".enemy-options div");
  for (var i = 0; i < enemyOptions.length; i++) {
    enemyOptions[i].childNodes[0].style.opacity = 0.3;
  }
}

function enemyPlay() {
  let rand = Math.floor(Math.random() * 3);

  const enemyOptions = document.querySelectorAll(".enemy-options div");
  resetInimigo();
  for (var i = 0; i < enemyOptions.length; i++) {
    if (i == rand) {
      enemyOptions[i].childNodes[0].style.opacity = 1;
      inimigoOpt = enemyOptions[i].childNodes[0].getAttribute("opt");
    }
  }

  validateVictory();
}

function resetOpacityPlayer() {
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.opacity = 0.3;
  }
}

for (var i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener("click", function (t) {
    resetOpacityPlayer();
    t.target.style.opacity = 1;
    playerOpt = t.target.getAttribute("opt");

    enemyPlay();

    // alert(playerOpt);
  });
}
