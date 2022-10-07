document.querySelector("button").onclick=roll;

function max(a,b)
{
    if(a>b)
        return a
    return b
}

function roll()
{
    var randomNumber1=Math.floor((Math.random()*6))+1;
    var randomNumber2=Math.floor((Math.random()*6))+1;
    var randomNumber3=Math.floor((Math.random()*6))+1;
    var randomNumber4=Math.floor((Math.random()*6))+1;

    document.querySelector("img.img1").setAttribute("src","images/dice"+ randomNumber1 + ".png");
    document.querySelector("img.img2").setAttribute("src","images/dice"+ randomNumber2 + ".png");
    document.querySelector("img.img3").setAttribute("src","images/dice"+ randomNumber3 + ".png");    
    document.querySelector("img.img4").setAttribute("src","images/dice"+ randomNumber4 + ".png");    

    var mx = max(randomNumber1,randomNumber2)
    mx = max(mx,randomNumber3)
    mx = max(mx,randomNumber4)
    
    if(mx== randomNumber1 && mx==randomNumber2 && mx == randomNumber3 && mx==randomNumber4)
        document.querySelector("h1").textContent="🚩Draw!";
    else if(randomNumber1==mx)
        document.querySelector("h1").textContent="🚩Player 1 Wins!";
    else if(randomNumber2==mx)
        document.querySelector("h1").textContent="🚩Player 2 Wins!";
    else if(randomNumber3==mx)
        document.querySelector("h1").textContent="🚩Player 3 Wins!"    ;
    else
        document.querySelector("h1").textContent="🚩Player 4 Wins!";    
}