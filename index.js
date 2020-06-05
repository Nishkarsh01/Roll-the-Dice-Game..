document.querySelector('.classname').addEventListener('click',numberGenerator);
var number1;
var number2;
var heading;
var subHeading;
heading=document.querySelector("h1");
var audio = document.querySelector("audio");
var audio1 =document.getElementsByClassName("audio");
var imgOne=document.querySelector("#imgOne");
var imgTwo=document.querySelector("#imgTwo");
subHeading=document.querySelector("#sub");
//heading.style.color="pink";//works just fine


function numberGenerator(){
    //console.log("copy houston");//works just fine

    subHeading.innerHTML="";

    number1=Math.floor(Math.random()*7);
    number2=Math.floor(Math.random()*7);

    if(number1===1){
        imgOne.src="images/dice1.png";
    }
    else if(number1===2){
        imgOne.src="images/dice2.png";
    }
    else if(number1===3){
        imgOne.src="images/dice3.png";
    }
    else if(number1===4){
        imgOne.src="images/dice4.png";
    }
    else if(number1===5){
        imgOne.src="images/dice5.png";
    }
    else if(number1===0){
        number1=6;
        imgTwo.src="images/dice6.png";
    }
    else{
        imgOne.src="images/dice6.png";
    }

    /****second if-else****/
   
    if(number2===1){
        imgTwo.src="images/dice1.png";
    }
    else if(number2===2){
        imgTwo.src="images/dice2.png";
    }
    else if(number2===3){
        imgTwo.src="images/dice3.png";
    }
    else if(number2===4){
        imgTwo.src="images/dice4.png";
    }
    else if(number2===5){
        imgTwo.src="images/dice5.png";
    }
    else if(number2===0){
        number2=6;
        imgTwo.src="images/dice6.png";
        
    }
    else{
        imgTwo.src="images/dice6.png";
    }
    console.log(number1);
    console.log(number2);
    
    if(number1===number2){
        //console.log("its a draw");
        heading.innerHTML="Its a Draw 😑";
        audio1[0].play();
    }
    else if(number1>number2){
        //console.log("Player 1 wins");
        heading.innerHTML="Player 1 Wins 🚩";
        audio.play();
    }
    else{
        //console.log("player 2 wins");
        heading.innerHTML="Player 2 Wins 🚩";
        audio.play();
        
    }
    

}