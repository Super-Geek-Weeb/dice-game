window.onload=game();
function game() {
    var player1Dice=Math.ceil(Math.random()*6);
    var player2Dice=Math.ceil(Math.random()*6);
    var winner;
    var player1DiceImg="/Users/veronika/Desktop/Web Dev/DiceChallenge/dice" + player1Dice + ".png";
    var player2DiceImg="/Users/veronika/Desktop/Web Dev/DiceChallenge/dice" + player2Dice + ".png";
    document.querySelectorAll(".dice-img")[0].setAttribute("src",player1DiceImg);
    document.querySelectorAll(".dice-img")[1].setAttribute("src",player2DiceImg);
    if (player1Dice===player2Dice){
      winner=0;
      document.querySelector("h1").innerText="🚩Draw! 🚩"
    } else if (player1Dice>player2Dice){
      winner=1;
      document.querySelector("h1").innerText="🚩Player 1 Wins!"
    } else {
      winner=2;
      document.querySelector("h1").innerText="Player 2 Wins! 🚩"}
}
