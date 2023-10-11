var one = document.getElementById("one")
var two = document.getElementById("two")
var three =  document.getElementById("three")
var four =  document.getElementById("four")
var loseorwin = document.querySelector("article")
function t(){
    one.style.background = "#6a040f"
    two.style.background = "#06d6a0"
    three.style.background = "#6a040f"  
    four.style.background = "#6a040f"
    one.style.color = "#fff"
    two.style.color = "#fff"
    three.style.color = "#fff"
    four.style.color = "#fff"
    loseorwin.innerHTML = ` 🥳 You Win  🥳 `
    setTimeout(()=>{
        location.href = "/level 8/index(id$SASA21).html"
    },2000)

}
function f(){
    //  😭 
    one.style.background = "#6a040f"
    two.style.background = "#06d6a0"
    three.style.background = "#6a040f"  
    four.style.background = "#6a040f"
    one.style.color = "#fff"
    two.style.color = "#fff"
    three.style.color = "#fff"
    four.style.color = "#fff"
    loseorwin.innerHTML = ` 😭 You lose  😭 `
    setTimeout(()=>{
        location.href = "/level 8/index(id$SASA21).html"
    },2000)

}

one.addEventListener("click",f)
two.addEventListener("click",t)
three.addEventListener("click",f)
four.addEventListener("click",f)