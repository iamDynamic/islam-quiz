var one = document.getElementById("one")
var two = document.getElementById("two")
var three =  document.getElementById("three")
var four =  document.getElementById("four")
var loseorwin = document.querySelector("article")
function t(){
    two.style.background = "#6a040f"
    three.style.background = "#06d6a0"  
    two.style.color = "#fff"
    three.style.color = "#fff"
    loseorwin.innerHTML = ` 🥳 You Win  🥳 `
    setTimeout(()=>{
        location.href = "/level 10/index(id$SASA21).html"
    },2000)

}
function f(){
    two.style.background = "#6a040f"
    three.style.background = "#06d6a0"  
    two.style.color = "#fff"
    three.style.color = "#fff"
    loseorwin.innerHTML = ` 🥳 You Lose  🥳 `
    setTimeout(()=>{
        location.href = "/level 10/index(id$SASA21).html"
    },2000)
}

two.addEventListener("click",f)
three.addEventListener("click",t)