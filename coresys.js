
const $main = document.getElementsByClassName("main-img")[0];

//btnsのclassをクリックしたらmain-imgが消える
document.getElementsByClassName("btns")[0].addEventListener("click",() => {
console.log("b");
    if($main.style.display === "") {
        $main.style.display = "none";
        console.log("c");
    }
});

