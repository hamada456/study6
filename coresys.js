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
    //買い物カゴ内の商品一覧
    let basketName = [];
    //買い物カゴ内の値段一覧
    let basketPrice = [];

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

                const productTarget = products[targetVal][productNum];
                //空か無い場合は準備中
                if(productTarget.itemName == undefined||productTarget.itemPrice == undefined||productTarget.itemSrc == undefined){
                    $productName[productNum].textContent = "準備中";
                    $productPrice[productNum].textContent = "準備中";
                    $productImgs[productNum].src = "./images/準備中.png";
                }else if(productTarget.itemName == "" || productTarget.itemPrice == "" || productTarget.itemSrc == "" ){
                    $productName[productNum].textContent = "準備中";
                    $productPrice[productNum].textContent = "準備中";
                    $productImgs[productNum].src = "./images/準備中.png";
                }else{
                    $productName[productNum].textContent = productTarget.itemName;
                    $productPrice[productNum].textContent = productTarget.itemPrice;
                    $productImgs[productNum].src = productTarget.itemSrc;
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

        //、、、↓↓↓クリックしたら起こるイベント↓↓↓↓↓↓↓↓↓
        const imgClick = (e) => {

            const $clickProductImgName = $doc.getElementsByClassName("productName")[e.target.dataset.img].innerText
            //空か無い場合は何もしない
            if( $clickProductImgName === "準備中" || $clickProductImgName === "" ) {
                return;
            }else{
            window.open(e.target.currentSrc ,width=50 ,heigth=50);
            }
        }

    //画像をクリックしたらimgClickイベントへ、、、↑↑↑↑↑↑↑↑↑
    let indeximg = 0;
    while(indeximg < $img.length){
        $img[indeximg].addEventListener("click", (e) => imgClick(e));
        indeximg++;
    }

    //、、、、、↓↓↓orderClickイベント、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
        const orderClick = (e) => {
                    
            const $clickProductText = document.getElementsByClassName("product-img0")[e.target.dataset.order];
                //準備中は何もしない
                if( $clickProductText.getElementsByClassName("productName")[0].innerText.match(/準備中/) ) {
                    return;
                }
                //最初の文字を消す
                $window2.getElementsByClassName("productAdd")[0].innerText = "";
                //テーブルを表示する
                $window2.getElementsByClassName("table")[0].style.display = "block";
                //削除ボタンをblockにして表示する
                $window2.getElementById("delbtn").style.display = "block";
                //〜〜テーブル追加構文～〜
                let $table = $window2.getElementById('table');
                let newRow = $table.insertRow();
                let newCell = newRow.insertCell();
                newCell.appendChild($doc.createTextNode($clickProductText.getElementsByClassName("productName")[0].innerText));
                //クラスを新規に付与
                newRow.className = "basket";
                newCell = newRow.insertCell();
                newCell.appendChild($doc.createTextNode($clickProductText.getElementsByClassName("productPrice")[0].innerText));
                        
                basketName.push($clickProductText.getElementsByClassName("productName")[0].innerText);
                basketPrice.push($clickProductText.getElementsByClassName("productPrice")[0].innerText);
                //追加後の配列内合計金額を置き換え
                //let basketIndex = 0;
                let basketInt = 0;
                let basketAll = 0;
                let basketPriceLength = basketPrice.length - 1
                //商品の数だけ繰り返す
                for(let basketIndex = 0 ; basketPrice.length > basketIndex ; basketIndex++){
                    //配列の末端の"円"を取り除く
                    basketInt = basketPrice[basketPriceLength].slice(0,-1);
                    //Int型に変換
                    basketInt = parseInt(basketInt);
                    //値段の配列末端一つだけを足す
                    basketAll = basketAll + basketInt;
                    //次の計算の為
                    basketPriceLength--
                }
                //追加後の合計金額を出力
                $window2.getElementById("total").innerText = basketAll > 0 ? `${basketAll}円` : "商品を選択";
                basketAll = 0;
        }
    //「かご」をクリックしたらorderClickイベントへ、、、↑↑↑、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
    for( let orderIndex = 0 ; orderIndex < document.querySelectorAll("[data-img]").length ; orderIndex++ ){
        $doc.getElementsByClassName("productOrder")[orderIndex].addEventListener("click", (e) => orderClick(e));
    }

        //-------------↓↓↓delClickイベント---------------------------------------------------------------------
            const delClick = () => {
                //配列内の名前と値段を削除
                basketName.pop();
                basketPrice.pop();
                //HTMLを削除.remove
                $window2.getElementsByClassName("basket")[basketName.length + 1].remove();
                //削除後の配列内合計金額を置き換え
                let basketInt = 0;
                let basketAll = 0;
                let basketPriceLength = basketPrice.length - 1
                //削除後の商品の数だけ繰り返す
                for(let basketIndex = 0 ; basketPrice.length > basketIndex ; basketIndex++){
                    //配列の末端の"円"を取り除く
                    basketInt = basketPrice[basketPriceLength].slice(0,-1);
                    //Int型に変換
                    basketInt = parseInt(basketInt);
                    //値段の配列末端一つだけを足す
                    basketAll = basketAll + basketInt;
                    //次の計算の為
                    basketPriceLength--
                }
                //削除後の合計金額を出力
                $window2.getElementById("total").innerText = basketAll > 0 ? `${basketAll}円` : "商品を選択";
                basketAll = 0;
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
})();