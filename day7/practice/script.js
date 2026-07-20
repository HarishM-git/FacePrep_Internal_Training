let inputE=document.getElementById('taskInput');
let submit=document.getElementById('sub');
let list=document.getElementById('list');
let arr=[]

inputE.addEventListener('keydown',(e)=>{
    if(e.key==="Enter"){
        addEvent()
    }
})

function Showing(){
    let show=JSON.parse(localStorage.getItem('tasks'));
    if (show){
        arr=show
    }
    list.innerHTML="";
    arr.forEach((e,i)=>{
        // console.log(e);
      
        let newT=document.createElement('li');
        newT.textContent=e.text;
        let but=document.createElement('button');
        but.textContent="Delete";

        newT.appendChild(but);
        list.appendChild(newT);
        if (e.completed){
            newT.classList.add('visited');

        }

        newT.addEventListener('click',()=>{
            newT.classList.toggle('visited');
            e.completed=!e.completed;
            localStorage.setItem('tasks',JSON.stringify(arr));
        })
        but.addEventListener('click',(e)=>{
            e.stopPropagation();
            arr.splice(i,1); 
            localStorage.setItem('tasks',JSON.stringify(arr));
            Showing()
            });
    })
}

function addEvent(){
   
    

    if (inputE.value.trim()===""){
        alert("enter Valid task");
    }
    else{
        let newObj={
            text:inputE.value,
            completed:false

        }

        arr.unshift(newObj);
        localStorage.setItem('tasks',JSON.stringify(arr))
        Showing();
    }
    inputE.value="";
}



submit.addEventListener('click',addEvent);
// list.innerText="Loading Your Past Tasks Hang Tight Bro..."
// setTimeout(()=>Showing(),3000)
Showing();

// function calculate(comeon){
//     comeon(10,20);
// }

// function  add(a,b){
//     console.log(a*b)
// }

// calculate(add);

//asynchronous functions how it works in js 

// let promise= new Promise((res,err)=>{
//     // let stat=false;
//     // if(stat){
//     //     res("Result is sucessus");
//     // }
//     // else{
//     //     err("some error happened");
//     // }
//     console.log("Loading....")
//     setTimeout((r)=>{res("sucess")},3000);
// })

// console.log(promise.then((r)=>console.log(r)).catch((e)=>console.log(e)))


// function getDelayed(num){
//     return new Promise((res)=>{setTimeout(()=>res(num),num*1000)});
// }

// async function demo(){
//     console.log("Hello");
//     let a=await getDelayed(3);
//     console.log(a)
//     let b=await getDelayed(5);
//     console.log(b)
//     console.log(a+b)
// }

// demo();

let ll=document.getElementById('datava');
async function getData(){
    let re=await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .catch(e=>e);
    console.log(re)
    alert("data Loaded sucessfully the blog data see in console ")
    // re.forEach((user)=>{
        
    //     let dd=document.createElement('li');
    //     dd.innerText=`${user.id} ${user.title}`;
    //     ll.append(dd);
        
    // })
    
}
getData();


