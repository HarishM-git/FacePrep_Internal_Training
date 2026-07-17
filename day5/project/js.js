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