'use strict';

var userName = prompt('please enter your name');
alert('Hello ' + userName + ' , welcome to my website');
alert('Please try to guess the following five questions by answering y/yes or n/no')

var myAge = prompt('I am in my 30s, yes or no ?');

if(myAge.toLowerCase() == 'yes' || 'y'){
    alert('oops, wrong answer! I am in my 20s');
    console.log('I am in my 30s, yes or no ?');
    console.log('you answered yes, but I am not, I am in my 20s');
    
}else if(myAge.toLowerCase() == 'no' || 'n'){
    alert('yes, that is correct! I am in my 20s');
    console.log('I am in my 30s, yes or no ?');
    console.log('yes that is correct');
}

var myStudies = prompt('Am I an engineer?');

if(myStudies.toLowerCase() == 'yes' || 'y'){
    alert('yes, that is correct answer :)');
    console.log('Am I an engineer?');
    console.log('you answered yes and that is correct')
} else if (myStudies.toLowerCase() == 'no' || 'n'){
    alert('oops, wrong answer! I am an engineer')
    console.log('Am I an engineer?');
    console.log('you answered No, but I am an engineer');
}

var mylastWork = prompt('Did I work in e-commerce bussines?');

if(mylastWork.toLowerCase == 'yes' || 'y'){
    alert('yes, that is correct :)')
    console.log('Did I work in e-commerce bussines?')
    console.log('you answered yes and that is correct')

}else if (mylastWork.toLowerCase() == 'no' || 'n'){
    alert('oops, wrong answer! I did')
    console.log('Did I work in e-commerce bussines?')
    console.log('you answered No, but I did');
} 

var myOtherlastWork = prompt('Do I know about photographing?');

if(myOtherlastWork.toLowerCase == 'yes' || 'y'){
    alert('yes, that is correct :)')
    console.log('Do I know about photographing?')
    console.log('you answered yes and that is correct')

}else if (myOtherlastWork.toLowerCase == 'no' || 'n'){
    alert('oops, wrong answer! I do')
    console.log('Do I know about photographing?')
    console.log('you answered No, but I do');
}

var programmingStartingYear = prompt('Did I start studying programming in 2019?');

if(programmingStartingYear.toLowerCase == 'yes' || 'y'){
    alert('oops, wrong answer! I started in 2020');
    console.log('Did I start studying programming in 2019?');
    console.log('you answered yes, but I did');


}else if (programmingStartingYear.toLowerCase == 'no' || 'n'){
    alert('yes, that is correct :)')
    console.log('Did I start studying programming in 2019?');
    console.log('you answered no and that is correct')

}

alert('Thank you ' + userName + ' ,you have tried your best')