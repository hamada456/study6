(() => {

    const $doc = document;
    const $btn = $doc.getElementById("js-btn");
    const $nav = $btn.querySelectorAll("[data-nav]");
    const $img = document.querySelectorAll("[data-img]");

    const $productImgs = document.querySelectorAll("[data-img]");
    const $productName = document.querySelectorAll('[data-name]');
    const $productPrice = document.querySelectorAll('[data-price]');

    //初期化
    const init = () => {
        document.getElementsByClassName("main-img")[0].style.display = "block";
    };
    init();

    //、、、↓↓↓クリックしたら起こるイベント
    const btnClick = (e) => {

        //最初の会社ロゴを消す
        document.getElementsByClassName("btns")[0].addEventListener("click" , () => {
            document.getElementsByClassName("main-img")[0].style.display = "none";
        });

        const $this = e.target;//クリックした物を取る
        const targetVal = $this.dataset.nav;//クリックデータ属性の値を取る

        //対象のコンテンツ（９個の画像と名前、値段など）をアクティブ化する、product-imgs
        //('[data-content="' + targetVal +'"]')
        document.querySelectorAll('[data-content="0"]')[0].style.display = "block";

        let products = [];
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "./coresys.json");
        xhr.onload = () => {
            let responseJson = JSON.parse(xhr.response);
            products = responseJson;
            console.log(products);
            console.log(responseJson.products);
            console.log(products[0]);
        }
        xhr.send();
        let nigiriProducts = products[0]
        
        //９個書き換え
        let productNum = 0;
        while(productNum < $productImgs.length){
            //URLか名前か値段が空なら準備中画像を表示
            let nNum = nigiriProducts[productNum];
            if(nNum.nigiriSrc === ""||nNum.nigiriName === ""||nNum.nigiriPrice === ""){
                $productImgs[productNum].src = "./images/準備中.png";
                $productName[productNum].textContent = "準備中";
                $productPrice[productNum].textContent = "準備中";
            }else{
                $productImgs[productNum].src = products[targetVal][productNum].nigiriSrc;
                $productName[productNum].textContent = products[targetVal][productNum].nigiriName;
                $productPrice[productNum].textContent = products[targetVal][productNum].nigiriPrice;
            };
            productNum++;
        };
        
    };

        //4つのボタンクリックしたらbtnClickイベントへ、、、↑↑↑
        let index = 0;
        while(index < $nav.length){
            $nav[index].addEventListener("click", (e) => btnClick(e));
            index++;
        }

        //、、、↓↓↓クリックしたら起こるイベント
        const imgClick = (e) => {
            //if ( nigiriProducts[productNum].nigiriSrc === "" |
            // nigiriProducts[productNum].nigiriName === "" |
            //  nigiriProducts[productNum].nigiriPrice === "" ){
            //     window.alert("aaa")
           // }else{
                window.open(e.target.currentSrc ,width=50 ,heigth=50);
           // }
        }

        //画像をクリックしたらimgClickイベントへ、、、↑↑↑
        let indeximg = 0;
        while(indeximg < $img.length){
            $img[indeximg].addEventListener("click", (e) => imgClick(e));
            indeximg++;
        }

        //、、、↓↓↓orderClickイベント
        let basketName = [];
        let basketPrice = [];
        
        const orderClick = (e) => {

            const $window2 = window.parent.document.getElementById("window2").contentWindow.document;
            const $clickProductText = document.getElementsByClassName("product-img0")[e.target.dataset.order];

            if($window2.getElementsByClassName("productAdd")[0].innerText !== ""){
            //一回目の処理
                //最初の文字を消す
                $window2.getElementsByClassName("productAdd")[0].innerText = "";
                //テーブルを表示する
                $window2.getElementsByClassName("table")[0].style.display = "block";
                //配列に商品名を追加
                basketName.push($clickProductText.getElementsByClassName("productName")[0].innerText);
                basketPrice.push($clickProductText.getElementsByClassName("productPrice")[0].innerText);
                //配列の商品を書き換える
                $window2.getElementsByTagName("td")[0].innerText = basketName;
                $window2.getElementsByTagName("td")[1].innerText = basketPrice;
                //console.log(basketName);
                //console.log(basketPrice);
            }else{
            //二回目以降の処理
                //テーブル追加構文～
                let $table = $window2.getElementById('table');
                let newRow = $table.insertRow();
                let newCell = newRow.insertCell();
                newCell.appendChild(document.createTextNode($clickProductText.getElementsByClassName("productName")[0].innerText));
                newCell = newRow.insertCell();
                newCell.appendChild(document.createTextNode($clickProductText.getElementsByClassName("productPrice")[0].innerText));
                newCell = newRow.insertCell();
                newCell.appendChild(document.createTextNode("del+"));
                //～テーブル追加構文
                
                basketName.push($clickProductText.getElementsByClassName("productName")[0].innerText);
                basketPrice.push($clickProductText.getElementsByClassName("productPrice")[0].innerText);
                //console.log(basketName);
                //console.log(basketPrice);
            }
        }
            //「かご」をクリックしたらorderClickイベントへ、、、↑↑↑
            for( let orderindex = 0 ; orderindex < document.querySelectorAll("[data-img]").length ; orderindex++ ){
                $doc.getElementsByClassName("productOrder")[orderindex].addEventListener("click", (e) => orderClick(e));
            }
})();