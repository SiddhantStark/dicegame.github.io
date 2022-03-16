var random1= Math.floor(Math.random()*6)+1;

var randomdiceimg = "dice" + random1 + ".png";

var randomimgsource = "images/" + randomdiceimg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src" , randomimgsource);

var random2= Math.floor(Math.random()*6)+1;

var randomdiceimg2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" ,randomdiceimg2);

if(random1>random2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
