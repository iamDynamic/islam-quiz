var one = document.getElementById("one")
var two = document.getElementById("two")
var three =  document.getElementById("three")
var four =  document.getElementById("four")
var loseorwin = document.querySelector("article")
function t(){
    one.style.background = "#06d6a0"
    two.style.background = "#6a040f"
    three.style.background = "#6a040f"  
    four.style.background = "#6a040f"
    one.style.color = "#fff"
    two.style.color = "#fff"
    three.style.color = "#fff"
    four.style.color = "#fff"
    loseorwin.innerHTML = ` 🥳 You Win  🥳 `
    setTimeout(()=>{
        location.href = "/level 5/index(id$bobob).html"
    },2000)

}
function f(){
    //  😭 
    one.style.background = "#06d6a0"
    two.style.background = "#6a040f"
    three.style.background = "#6a040f"  
    four.style.background = "#6a040f"
    one.style.color = "#fff"
    two.style.color = "#fff"
    three.style.color = "#fff"
    four.style.color = "#fff"
    loseorwin.innerHTML = ` 😭 You lose  😭 `
    setTimeout(()=>{
        location.href = "/level 5/index(id$bobob).html"
    },2000)

}

one.addEventListener("click",t)
two.addEventListener("click",f)
three.addEventListener("click",f)
four.addEventListener("click",f)