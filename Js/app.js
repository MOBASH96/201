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

if(SQ.toLowerCase()==="Y"){
    alert("yes thats right");
} else{
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
