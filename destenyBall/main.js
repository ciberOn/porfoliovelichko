const list =["yes","no","maybe beybi","-5 ","bul bul bul bul","may may may may"]
const btn =document.getElementById("btn")
btn.addEventListener("click",()=>{
    let randomInt =Math.floor(Math.random()*list.length)
    btn.innerText=list[randomInt]
})