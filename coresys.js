
console.log("a");

document.getElementsByClassName("btns").addEventListener("click", () => {

console.log("b");

    if(document.getElementsByClassName("main-imgs").style.display === "block") {
        document.getElementsByClassName("main-imgs").style.display = "none";
    }else{
        document.getElementsByClassName("main-imgs").style.display = "none"
    }

});