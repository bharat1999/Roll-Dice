document.querySelector("button").onclick=roll;
function roll()
{
    var randomNumber1=Math.floor((Math.random()*6))+1;
    var randomNumber2=Math.floor((Math.random()*6))+1;
    var randomNumber3=Math.floor((Math.random()*6))+1;

    document.querySelector("img.img1").setAttribute("src","images/dice"+ randomNumber1 + ".png");
    document.querySelector("img.img2").setAttribute("src","images/dice"+ randomNumber2 + ".png");
    document.querySelector("img.img3").setAttribute("src","images/dice"+ randomNumber3 + ".png");

    if(randomNumber1>randomNumber2 && randomNumber1>randomNumber3)
        document.querySelector("h1").textContent="🚩Player 1 Wins!"
    else if(randomNumber2>randomNumber1 && randomNumber2>randomNumber3)
        document.querySelector("h1").textContent="🚩Player 2 Wins!"
    else if(randomNumber3>randomNumber1 && randomNumber3>randomNumber2)
        document.querySelector("h1").textContent="🚩Player 3 Wins!"
    else
        document.querySelector("h1").textContent="🚩Draw!🚩";    
}