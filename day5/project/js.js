function myMove(move){
    let ran=Math.random();
    // console.log(ran);
    let cm;
    if (ran<=1/3){
        cm="Scissor";
        document.getElementById('imge').innerHTML="<img src='https://thumbs.dreamstime.com/b/scissors-cut-decorative-red-ribbon-dash-line-flat-design-style-vector-illustration-47977738.jpg'>"
    }
    else if (ran>1/3 && ran<2/3){
        cm="Rock";
        document.getElementById('imge').innerHTML="<img src='https://img.magnific.com/free-psd/stone-game-icon-illustration_23-2151993213.jpg?semt=ais_hybrid&w=740&q=80'>"
    }
    else{
        cm="Paper";
        document.getElementById('imge').innerHTML="<img src='https://tiimg.tistatic.com/fp/1/007/951/light-weight-thick-student-friendly-easy-to-usable-white-smooth-writer-a4-sheet-paper-259.jpg'>"
    }


    if (move==cm){
        console.log("you chooseed",move)
        console.log("computer choosed",cm)
        document.getElementById('cmove').innerText=`Computer Choosed ${cm}`
        document.getElementById('result').innerText="Draw"
        document.getElementById('result').style="color:black"

    }
    else if(move=='Rock' && cm=="Paper"){
        console.log("you chooseed",move)
        console.log("computer choosed",cm)
        document.getElementById('cmove').innerText=`Computer Choosed ${cm}`
        document.getElementById('result').innerText="Computer Wins"
        document.getElementById('result').style="color:red"

    }
    else if(move=='Rock' && cm=="Scissor"){
        console.log("you chooseed",move)
        console.log("computer choosed",cm)
        document.getElementById('cmove').innerText=`Computer Choosed ${cm}`
        document.getElementById('result').innerText="You WON"
        document.getElementById('result').style="color:green"
    }

    else if(move=='Paper' && cm=="Rock"){
        console.log("you chooseed",move)
        console.log("computer choosed",cm)
        document.getElementById('cmove').innerText=`Computer Choosed ${cm}`
        document.getElementById('result').innerText="You WON"
        document.getElementById('result').style="color:green"

    }
    else if(move=='Paper' && cm=="Scissor"){
        console.log("you chooseed",move)
        console.log("computer choosed",cm)
        document.getElementById('cmove').innerText=`Computer Choosed ${cm}`
        document.getElementById('result').innerText="Computer Wins"
        document.getElementById('result').style="color:red"

    }
    else if(move=='Scissor' && cm=="Rock"){
        console.log("you chooseed",move)
        console.log("computer choosed",cm)
        document.getElementById('cmove').innerText=`Computer Choosed ${cm}`
        document.getElementById('result').innerText="Computer Wins"
        document.getElementById('result').style="color:red"
    }
    else if (move=='Scissor' && cm=="Paper"){
        console.log("you chooseed",move)
        console.log("computer choosed",cm)
        document.getElementById('cmove').innerText=`Computer Choosed ${cm}`
        document.getElementById('result').innerText="You WON"
        document.getElementById('result').style="color:green"
    }
}


let input=document.getElementById('oe');
let sub=document.getElementById('su');
function HandleSub(){
    let nu=+(input.value);
    if (nu%2==0){
        document.getElementById('re').innerText="Even";
    }
    else{
        document.getElementById('re').innerText="Odd";
    }
}

sub.addEventListener('click',HandleSub);

let arr=[15,216,2,54,3,8]
let a=0
arr.forEach(num=>{
    if (num>a){
        // console.log(num);
        a=num;


    }
    return a;
})
console.log(a);

let ty=document.querySelector('div');

console.log(ty.children[0])

let uu=document.createElement('h1');
uu.textContent="HEllo Bhai";
document.body.appendChild(uu);
let cu=document.createElement('h1');
cu.textContent="Hi"
cu.classList.add('check');
document.body.appendChild(cu);
let iu=document.getElementsByClassName('check');
iu[0].style.backgroundColor="yellow";


// let items = document.querySelectorAll("li");

// items.forEach(item => {

//     item.addEventListener("click", () => {

//         console.log(item.textContent);
        
//     });

// });

let ite=document.getElementById('yum');

ite.addEventListener('click',(eve)=>{
    console.log(eve.target.textContent);
})

let form = document.getElementById("myForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    console.log("Form Submitted");

});