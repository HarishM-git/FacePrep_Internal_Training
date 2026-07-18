// learning the varailble

let a = document.getElementById("heading");
let b = document.getElementById("text");
let c = document.getElementById("result");

// let x = 100;
// console.log(x);

// x = 200;
// console.log(x);

let colorNumber = 0;

function changeMessage(){

    b.innerHTML = "JavaScript is actually fun!";

    // a.innerHTML = "Changed";
    // console.log("button clicked");

}

function changeColor(){

    if(colorNumber == 0){

        document.body.style.backgroundColor = "lightblue";
        colorNumber = 1;

    }

    else{

        document.body.style.backgroundColor = "#eeeeee";
        colorNumber = 0;

    }

}

function askName(){

    let name = prompt("Enter your name");

    if(name == ""){

        c.innerHTML = "You didn't type anything.";

    }

    else if(name == null){

        c.innerHTML = "Prompt was cancelled.";

    }

    else{

        c.innerHTML = "Hello " + name;

    }

}

function showNumber(){

    let num = Math.floor(Math.random() * 100) + 1;

    c.innerHTML = "Random Number : " + num;

}

// Practice

// let marks = 75;

// if(marks >= 50){
//     console.log("Pass");
// }
// else{
//     console.log("Fail");
// }

// let age = 20;

// if(age >= 18){
//     console.log("Can Vote");
// }

// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// let arr = [10,20,30];

// console.log(arr);

// arr.push(40);

// console.log(arr);

// Trying String

// let first = "Hello";
// let second = "World";

// console.log(first + " " + second);

// document.getElementById("heading").style.color = "red";

// alert("Practicing");



let count = 0;

function increaseCount(){

    count++;

    document.getElementById("countText").innerHTML = "Count : " + count;

}

function decreaseCount(){

    count--;

    document.getElementById("countText").innerHTML = "Count : " + count;

}