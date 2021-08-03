
const $main = document.getElementsByClassName("main-img")[0];


//btnsのclassをクリックしたらmain-imgが消える
document.getElementsByClassName("btns")[0].addEventListener("click",() =>{
    //if($main.style.display === "") {
        $main.style.display = "none";
    //}
});

//ボタンクリックで画像表示
document.getElementById("A").addEventListener("click",() =>{
    if(document.getElementsByClassName("product-imgs")[0].style.display === "") {
        document.getElementsByClassName("product-imgs")[0].style.display = "block";
    }
});
