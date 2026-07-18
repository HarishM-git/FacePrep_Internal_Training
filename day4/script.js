function increment(){
    let a=+(document.getElementById("countContainer").innerText);
    a+=1;
    // console.log(typeof a);
    document.getElementById("countContainer").innerText=`${a}`;
}
function decrement(){
    let a=+(document.getElementById("countContainer").innerText)
    a-=1
    document.getElementById("countContainer").innerText=`${a}`

}


//  <!-- let a=prompt("Hello how are you what is you name") -->;
//         console.log(a);
        
//         <!-- alert("Hello how are you "+a)  -->
        
// function add(a,b){

//     return a+b;

// }

// console.log(add(10,20));

// console.log(add(5,7));

let fruits = ["Apple","Banana","Orange"];

function showArray(){

    document.getElementById("arrayResult").innerHTML = fruits;

}


// let r = Math.floor(Math.random()*10);

// console.log(r);

// if(r > 5){

//     console.log("Big Number");

// }

// else{

//     console.log("Small Number");

// }


function addFruit(){

    let newFruit = prompt("Enter Fruit Name");

    if(newFruit != null && newFruit != ""){

        fruits.push(newFruit);

    }

    document.getElementById("arrayResult").innerHTML = fruits;

}
function removeFruit(){

    fruits.pop();

    document.getElementById("arrayResult").innerHTML = fruits;

}
function makeUpperCase(){

    let word = document.getElementById("wordInput").value;

    document.getElementById("wordResult").innerHTML = word.toUpperCase();

}
function makeLowerCase(){

    let word = document.getElementById("wordInput").value;

    document.getElementById("wordResult").innerHTML = word.toLowerCase();

}


// let numbers = [10,20,30,40];

// console.log(numbers);

// numbers.push(50);

// console.log(numbers);


//     console.log(numbers[i]);

function countLetters(){

    let word = document.getElementById("wordInput").value;

    document.getElementById("wordResult").innerHTML =
    "Length : " + word.length;

}

// numbers.pop();

// console.log(numbers);

// console.log(numbers.length);

// for(let i=0;i<numbers.length;i++){


// let myName = "Harish";

// console.log(myName.length);

// console.log(myName.toUpperCase());

// console.log(myName.toLowerCase());


function printNumbers(){

    let text = "";

    for(let i = 1; i <= 200; i++){

        text = text + i + " ";

    }

    document.getElementById("numberResult").innerHTML = text;

}


function checkConfirm(){

    let answer = confirm("Do you like JavaScript?");

    if(answer){

        document.getElementById("confirmResult").innerHTML =
        "You clicked OK.";

    }

    else{

        document.getElementById("confirmResult").innerHTML =
        "You clicked Cancel.";

    }

}