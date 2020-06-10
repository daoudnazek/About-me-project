'use strict';

var correctAnswerCounter = 0;

var userName = prompt('please enter your name');
alert('Hello ' + userName + ' , welcome to my website');
alert('Please try to guess the following five questions by answering y/yes or n/no')
function age(){
var myAge = prompt('I am in my 30s, yes or no ?');

if(myAge.toLowerCase() == 'yes' || myAge.toLowerCase() =='y'){
    alert('oops, wrong answer! I am in my 20s');
    console.log('I am in my 30s, yes or no ?');
    console.log('you answered yes, but I am not, I am in my 20s');
    correctAnswerCounter++ ;

}else if (myAge.toLowerCase() == 'no' || myAge.toLowerCase() =='n'){
    alert('yes, that is correct! I am in my 20s');
    console.log('I am in my 30s, yes or no ?');
    console.log('yes that is correct');
}// end if 1
}
age();
function degree(){
var myStudies = prompt('Am I an engineer?');

if(myStudies.toLowerCase() == 'yes' || myStudies.toLowerCase() == 'y'){
    alert('yes, that is correct answer :)');
    console.log('Am I an engineer?');
    console.log('you answered yes and that is correct')
    correctAnswerCounter ++ ;

} else if (myStudies.toLowerCase() == 'no' || myStudies.toLowerCase() =='n'){
    alert('oops, wrong answer! I am an engineer')
    console.log('Am I an engineer?');
    console.log('you answered No, but I am an engineer');
}// end if 2
}
degree();

function work(){
 var mylastWork = prompt('Did I work in e-commerce bussines?');

if(mylastWork.toLowerCase() == 'yes' || mylastWork.toLowerCase() == 'y'){
    alert('yes, that is correct :)')
    console.log('Did I work in e-commerce bussines?')
    console.log('you answered yes and that is correct')
    correctAnswerCounter++ ;

}else if (mylastWork.toLowerCase() == 'no' || mylastWork.toLowerCase() == 'n'){
    alert('oops, wrong answer! I did')
    console.log('Did I work in e-commerce bussines?')
    console.log('you answered No, but I did');
}// end if 3
}
work();

function hobby(){
var myOtherlastWork = prompt('Do I know about photographing?');

if(myOtherlastWork.toLowerCase() == 'yes' || myOtherlastWork.toLowerCase() == 'y'){
    alert('yes, that is correct :)')
    console.log('Do I know about photographing?')
    console.log('you answered yes and that is correct')
    correctAnswerCounter++ ;

}else if (myOtherlastWork.toLowerCase() == 'no' || myOtherlastWork.toLowerCase() =='n'){
    alert('oops, wrong answer! I do')
    console.log('Do I know about photographing?')
    console.log('you answered No, but I do');
}// end if 4
}
hobby();
function prog(){
var programmingStartingYear = prompt('Did I start studying programming in 2019?');

if(programmingStartingYear.toLowerCase() == 'yes' || programmingStartingYear.toLowerCase() == 'y'){
    alert('oops, wrong answer! I started in 2020');
    console.log('Did I start studying programming in 2019?');
    console.log('you answered yes, but I did');
    correctAnswerCounter++ ;

}else if (programmingStartingYear.toLowerCase() == 'no' || programmingStartingYear.toLowerCase() == 'n'){
    alert('yes, that is correct :)')
    console.log('Did I start studying programming in 2019?');
    console.log('you answered no and that is correct')
}// end if 5
}
prog();

function guess(){
for (var i =0; i<4 ; i++){
    var guessNumber = prompt('would you guess the correct number? you have four attempts');
if (guessNumber > 7){
    alert('it`s too high');
}else if(guessNumber < 7){
    alert('it`s too low')
}else {
    alert('that is correct');
    correctAnswerCounter++ ;
}
}// end for 
console.log('The right number is 7');
alert('The right number is 7');
}
guess();

function food(){
    var x = 0;
    var foodArray = ['pizza', 'burger', ' pasta', 'mlukieh '];
    var foodChoice = prompt('Can you guess one of my favourite food? , you have six attempts');
     if (x<5){
    }else {
        alert('You run out of attempets and here is the list of my favourite food'+ foodArray)
    }
    }
    food();
    
    
    alert('Thank you ' + userName + ' ,you have tried your best');
    alert('The number of your correct answers is : ' + correctAnswerCounter);

