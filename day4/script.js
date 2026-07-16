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