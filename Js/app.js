'use strict'
var userName=prompt("hello,what are your name please ?");
alert("hello"+ userName+"welcome in my cv page ");
var rndNo=Math.floor(Math.random() * 1000);
var check=prompt("are yor a repote, please enter this number "+ rndNo);

for(var i=0;rndNo!=check;i++){
    if(rndNo===check){
        alert|("welcome"+userName);
    }else{check=prompt("are yor a repote, please enter this number "+ rndNo)
}}
var FQ=confirm("Do I know you ? press yes to continue");

if(FQ===true){
    alert("welcome here");
} else{
    alert("I hope to know you soon"+userName+"but now please answer those qustion ");
}

var SQ=prompt("Did i have BA degree? (Y,N)");

if(SQ==="Y"){
    alert("yes thats right");
} else {
    alert("thats wrong");
}

var TQ=prompt("Is my age is 25? (Y,N)");

if(TQ.toLowerCase()==="n"){
    alert("yes thats right");
} else{
    alert("thats wrong");
}
var fthQ=prompt(" is my currant traning program is Softwere developer? (Y,N)");

if(fthQ.toLowerCase()==="y"){
    alert("yes thats right");
} else{
    alert("thats wrong");
}
var fvQ=prompt("what is my current social status engaged ? (Y,N)");

if(fvQ.toLowerCase()==="y"){
    alert("yes thats right");
} else{
    alert("thats wrong");
}
var SixQ=prompt("Do I have a car? (Y,N)");

if(SixQ.toLowerCase()==="y"){
    alert("yes thats right");
} else{
    alert("thats wrong");
}
alert("welcome to my cv web page "+userName+"you can see it now")


//The gusses qustions 

//Calling functions

firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();
sixthQuestion();
seventhQuestion();
score();

var userScore = 0 ;
// first  Question:
function firstQuestion() {
    var AnswersArray=['12','6','15'];
    var z=0;
    for(var i=0; i<6 ; i++){
        var InputAnswer= prompt("Can you guess my number? from (1 - 20)")
        if(InputAnswer === AnswersArray[0] || InputAnswer === AnswersArray[1] || InputAnswer === AnswersArray[2]){
            z++; userScore ++;
            if (z===3) {
               i=6;
              
            }
             alert('Correct! Let`s try another one');
             
        }else {
            alert('Not Correct! I`ll give you another try!');
        }
    }
    alert("My favorite languages are:" + AnswersArray);
}


// Scand Question:
function secondQuestion () {
    var AnswersArray=['bmw','mercedes','audi'];
    var z=0;
    for(var i=0; i<6 ; i++){
        var InputAnswer= prompt("Can you guess my favorite car compeny ?")
        if(InputAnswer.toLowerCase() === AnswersArray[0] || InputAnswer.toLowerCase() === AnswersArray[1] || InputAnswer.toLowerCase() === AnswersArray[2]){
        z++; userScore ++;
        if (z===3) {
           i=6;
           userScore ++;
        }
         alert('Correct! Let`s try another one');
         
        }else {
        alert('Not Correct! I`ll give you another try!');
        }
    }
alert("My favorite cars are:" + AnswersArray);
}


// Third Question:
function thirdQuestion() {
    var AnswersArray=['23','24'];
    var z=0;
    for(var i=0; i<6 ; i++){
        var InputAnswer= prompt("Can you guess my  approxmate  age ?")
        if(InputAnswer === AnswersArray[0] || InputAnswer === AnswersArray[1] || InputAnswer === AnswersArray[2]){
        z++; userScore ++;
        if (z===3) {
           i=6;
           userScore ++;
        }
         alert('Correct! Let`s try another one');
         
        }else {
        alert('Not Correct! I`ll give you another try!');
        }
    }
alert("My age is: " + AnswersArray);
}


// fourth Question:
function fourthQuestion() {
    var AnswersArray=['173','174'];
    var z=0;
    for(var i=0; i<6 ; i++){
        var InputAnswer= prompt("Can you guess my  approxmate  hight ?")
        if(InputAnswer === AnswersArray[0] || InputAnswer === AnswersArray[1] || InputAnswer === AnswersArray[2]){
        z++; userScore ++;
        if (z===3) {
           i=6;
           userScore ++;
        }
         alert('Correct! Let`s try another one');
         
        }else {
        alert('Not Correct! I`ll give you another try!');
        }
    }   
alert("My height is : " + AnswersArray);
}


// fivth Question:
function fifthQuestion() {
    var AnswersArray=['86','87'];
    var z=0;
    for(var i=0; i<6 ; i++){
        var InputAnswer= prompt("Can you guess my  approxmate  weight ?")
        if(InputAnswer.toUpperCase() === AnswersArray[0] || InputAnswer.toUpperCase() === AnswersArray[1] || InputAnswer.toUpperCase() === AnswersArray[2]){
            z++; userScore ++;
        if (z===3) {
           i=6;
           userScore ++;
        }
         alert('Correct! Let`s try another one');
         
        }else {
        alert('Not Correct! I`ll give you another try!');
        }
    }
alert("My weight is :" + AnswersArray);
}

// Sixth Question:
function sixthQuestion() {
    var AnswersArray=['92.6','93'];
    var z=0;
    for(var i=0; i<6 ; i++){
        var InputAnswer= prompt("Can you guess my  approxmate  high school mark ?")
        if(InputAnswer.toUpperCase() === AnswersArray[0] || InputAnswer.toUpperCase() === AnswersArray[1] || InputAnswer.toUpperCase() === AnswersArray[2]){
        z++; userScore ++;
        if (z===3) {
           i=6;
           userScore ++;
        }
         alert('Correct! Let`s try another one');
        
        }else {
        alert('Not Correct! I`ll give you another try!');
        }
    }
alert("My high school mark :" + AnswersArray);
}  


// Seventh Question:
function seventhQuestion() {
    var AnswersArray=['3.15','3.2'];
    var z=0;
    for(var i=0; i<6 ; i++){
    var InputAnswer= prompt("Can you guess my approxmate  BA GPA ( Out of 4)  ?")
    if(InputAnswer.toUpperCase() === AnswersArray[0] || InputAnswer.toUpperCase() === AnswersArray[1] || InputAnswer.toUpperCase() === AnswersArray[2]){
        z++; userScore ++;
        if (z===3) {
           i=6;
           userScore ++;
        }
         alert('Correct! Let`s try another one');
         
    }else {
        alert('Not Correct! I`ll give you another try!');
    }
}
alert("My approxmate GPA is: " + AnswersArray);
}

function score() {
    alert("Good Job!... You got " + userScore + " correct answers!")
// console.log("Your final score is " + userScore");
    alert("Thank you for your time " + userName + ".");
// console.log("Thank you for your time " + userName + ".");
}


