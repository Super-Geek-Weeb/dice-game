    var player1Dice=Math.ceil(Math.random()*6);
    var player2Dice=Math.ceil(Math.random()*6);
    var player1DiceImg="dice" + player1Dice + ".png";
    var player2DiceImg="dice" + player2Dice + ".png";
    document.querySelectorAll(".dice-img")[0].setAttribute("src",player1DiceImg);
    document.querySelectorAll(".dice-img")[1].setAttribute("src",player2DiceImg);
    if (player1Dice===player2Dice){
      document.querySelector("h1").innerText="🚩Draw! 🚩"
    } else if (player1Dice>player2Dice){
      document.querySelector("h1").innerText="🚩Play 1 Wins!"
    } else {
      document.querySelector("h1").innerText="Play 2 Wins! 🚩"}

