function roll() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var msg = "Somthing went wrong!";

  document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

  if(randomNumber1 > randomNumber2) {
    msg = "<i class='fa fa-trophy'></i> &nbsp;&nbsp; Player&nbsp; 1&nbsp; Wins";
  }
  else if(randomNumber2 > randomNumber1) {
    msg = "Player &nbsp;2 &nbsp;Wins &nbsp;&nbsp;<i class='fa fa-trophy'></i>";
  }
  else if (randomNumber1 = randomNumber2) {
    msg = "<i class='fa fa-trophy'></i>&nbsp;&nbsp; Draw &nbsp;&nbsp;<i class='fa fa-trophy'></i>";
  }

  document.querySelector(".heading").innerHTML = msg;
}
