let a=prompt("Enter your Name Please");

if (a===null || a.trim() === ""){
    document.getElementById("title").innerText="Guest"

}
else{
    
    document.getElementById("title").innerText=`${a}😊`;

}


function changeMood(mood){

    let emoji = document.getElementById("emoji");

    let message = document.getElementById("message");

    if(mood == "happy"){

        emoji.innerHTML = `<img src="happy.jpg" />`;

        message.innerHTML = "That's awesome! Keep smiling!";

        document.body.style.backgroundImage="url(happy.jpg)"
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    }

    else if(mood == "sad"){

        emoji.innerHTML = `<img src="sad.jpg" />`;

        message.innerHTML = "Don't worry. Better days are coming!";
        document.body.style.backgroundImage="url(sad.jpg)"

    }

    else if(mood == "angry"){

        emoji.innerHTML = `<img src="angry.jpg" />`;

        message.innerHTML = "Take a deep breath and stay calm.";
        document.body.style.backgroundImage="url(angry.jpg)"

    }

    else{

        emoji.innerHTML = `<img src="sleepy.jpg" />`;

        message.innerHTML = "Looks like you need some rest!";
        document.body.style.backgroundImage="url(sleepy.jpg)"

    }

}