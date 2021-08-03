
const $main = document.getElementsByClassName("main-img")[0];

//btnsのclassをクリックしたらmain-imgが消える
document.getElementsByClassName("btns")[0].addEventListener("click",()=>{
        $main.style.display = "none";
});

//ボタンクリックで画像表示

//document.getElementById("A").addEventListener("click" , () => {
//document.getElementsByClassName("product-imgs")[0].style.display = "block";
//document.getElementById("00").src = "https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_gyukarubimayo.png";
//document.getElementById("n00").textContent = "すし";
//document.getElementById("p00").textContent = "100";
//});

const $doc = document;
const $tab = $doc.getElementsByClassName("btns");
const $nav = $tab.querySelectorAll("[data-nav]");

console.log("$nav", $nav);
