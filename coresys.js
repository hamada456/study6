(() => {

    const $doc = document;
    const $btn = $doc.getElementById("js-btn");
    const $nav = $btn.querySelectorAll("[data-nav]");
    const $img = document.querySelectorAll("[data-img]");

    const $productImgs = document.querySelectorAll("[data-img]");
    const $productName = document.querySelectorAll('[data-name]');
    const $productPrice = document.querySelectorAll('[data-price]');
    //const $productDel = document.querySelectorAll('[data-del]');
    const $window2 = window.parent.document.getElementById("window2").contentWindow.document;

    //./coresys.jsonを取得
    getJSON();
    //初期化
    const init = () => {
        document.getElementsByClassName("main-img")[0].style.display = "block";
    };
    init();

    //、、↓↓↓クリックしたら起こるイベント「「「btnClick」」」」「「「「「「「「「「「「「「「「「「「「「「「「「「「「「「「「「「「
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
        //９個書き換え
        let productNum = 0;
        while(productNum < $productImgs.length){
            if(products[targetVal][productNum].itemName === undefined || products[targetVal][productNum].itemPrice === undefined || products[targetVal][productNum].itemSrc === undefined ){
                $productName[productNum].textContent = "準備中";
                $productPrice[productNum].textContent = "準備中";
                $productImgs[productNum].src = "./images/準備中.png";
                //document.getElementsByClassName("productOrder")[productNum].innerText = "";
            }else if(products[targetVal][productNum].itemName === "" || products[targetVal][productNum].itemPrice === "" || products[targetVal][productNum].itemSrc === "" ){
                $productName[productNum].textContent = "準備中";
                $productPrice[productNum].textContent = "準備中";
                $productImgs[productNum].src = "./images/準備中.png";
                //document.getElementsByClassName("productOrder")[productNum].innerText = "";
            }else{
                $productName[productNum].textContent = products[targetVal][productNum].itemName;
                $productPrice[productNum].textContent = products[targetVal][productNum].itemPrice;
                $productImgs[productNum].src = products[targetVal][productNum].itemSrc;
            }
            productNum++;
        };
        
    };

        //4つのボタンクリックしたらbtnClickイベントへ、、、↑↑↑」」」」」」」」」」」」」」」」」」」」」」」」」」」」」」」」」」」」
        let index = 0;
        while(index < $nav.length){
            $nav[index].addEventListener("click", (e) => btnClick(e));
            index++;
        }

        //、、、↓↓↓クリックしたら起こるイベント
        const imgClick = (e) => {
            // if (products[targetVal][productNum].itemSrc === "" ||
            //     products[targetVal][productNum].itemName === "" ||
            //     products[targetVal][productNum].itemPrice === "" ){
            //     window.alert("準備中です")
            // }else{
                window.open(e.target.currentSrc ,width=50 ,heigth=50);
            //}
        }

        //画像をクリックしたらimgClickイベントへ、、、↑↑↑
        let indeximg = 0;
        while(indeximg < $img.length){
            $img[indeximg].addEventListener("click", (e) => imgClick(e));
            indeximg++;
        }

        //、、、、、↓↓↓orderClickイベント、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
        let basketName = [];
        let basketPrice = [];
        
        const orderClick = (e) => {
            
            const $clickProductText = document.getElementsByClassName("product-img0")[e.target.dataset.order];

            //準備中は何もしない
            if( $clickProductText.getElementsByClassName("productName")[0].innerText.match(/準備中/) ) {
                return;
            }

            if($window2.getElementsByClassName("productAdd")[0].innerText !== ""){
            //一回目の処理
                //最初の文字を消す
                $window2.getElementsByClassName("productAdd")[0].innerText = "";
                //テーブルを表示する
                $window2.getElementsByClassName("table")[0].style.display = "block";
                //削除ボタンをblockにして表示する
                $window2.getElementById("delbtn").style.display = "block";
                //配列に商品名を追加
                basketName.push($clickProductText.getElementsByClassName("productName")[0].innerText);
                basketPrice.push($clickProductText.getElementsByClassName("productPrice")[0].innerText);
                //配列の商品を書き換える
                $window2.getElementsByTagName("td")[0].innerText = basketName;
                $window2.getElementsByTagName("td")[1].innerText = basketPrice;
                console.log(basketName);
                console.log(basketPrice);
                $window2.getElementById("total").innerText = "かごの金額";
            }else{
            //二回目以降の処理
                //〜〜テーブル追加構文～〜
                let $table = $window2.getElementById('table');
                let newRow = $table.insertRow();
                let newCell = newRow.insertCell();
                newCell.appendChild(document.createTextNode($clickProductText.getElementsByClassName("productName")[0].innerText));
                //クラスを新規に付与
                newRow.className = "basket";
                newCell = newRow.insertCell();
                newCell.appendChild(document.createTextNode($clickProductText.getElementsByClassName("productPrice")[0].innerText));
                //削除ボタン用の空のHTMLを追加
                //newCell = newRow.insertCell();
                //削除ボタンを追加
                //newCell.appendChild(document.createElement("button"));
                //$productDel[1].setAttribute("data-del","1");
                //～〜テーブル追加構文〜〜
                
                basketName.push($clickProductText.getElementsByClassName("productName")[0].innerText);
                basketPrice.push($clickProductText.getElementsByClassName("productPrice")[0].innerText);
                console.log(basketName);
                console.log(basketPrice);
                $window2.getElementById("total").innerText = "かごの金額";
            }
        }
            //「かご」をクリックしたらorderClickイベントへ、、、↑↑↑、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
            for( let orderIndex = 0 ; orderIndex < document.querySelectorAll("[data-img]").length ; orderIndex++ ){
                $doc.getElementsByClassName("productOrder")[orderIndex].addEventListener("click", (e) => orderClick(e));
            }

            //-------------↓↓↓delClickイベント---------------------------------------------------------------------
            const delClick = () => {
                basketName.pop();
                basketPrice.pop();
                $window2.getElementsByClassName("basket")[basketName.length].remove();
                $window2.getElementById("total").innerText = "削除後の金額";
                console.log(basketName);
                console.log(basketPrice);
            }

            //「削除」をクリックしたら「「delClick」」イベントへ------↑↑↑------------------------------------------------
            $window2.getElementById("delbtn").addEventListener("click", () => delClick());

            function getJSON() {
                // XMLHttpRequest オブジェクトを生成する
                const req = new XMLHttpRequest();  
                // 実際にサーバーへリクエストを送信
                req.open("GET", "./coresys.json",false);
                req.send(null);
                // JSON のデータ数分処理、値を返す
                products = JSON.parse(req.responseText);
            }
            //console.log(products)
})();