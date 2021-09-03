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

        //対象のコンテンツ（９個の画像と名前、値段など）をアクティブ化する、product-imgs///' + targetVal +'を0にしてもOK
        //('[data-content="' + targetVal +'"]')
        document.querySelectorAll('[data-content="0"]')[0].style.display = "block";

        const hamaSushiURL = "https://www.hama-sushi.co.jp/assets/menu/img";

        const products = [
            nigiriProducts = [{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_gyukarubimayo.png",
                nigiriName:"susi0",
                nigiriPrice:"0円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_cheese_hamburg.png",
                nigiriName:"susi1",
                nigiriPrice:"1円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_loastbeef_yamawasabi.png",
                nigiriName:"susi2",
                nigiriPrice:"2円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_aburitamago_cheese.png",
                nigiriName:"susi3",
                nigiriPrice:"3円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_aburi_ebi_mayo.png",
                nigiriName:"susi4",
                nigiriPrice:"4円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_z_tennenakaebi_siolemon.png",
                nigiriName:"susi5",
                nigiriPrice:"5円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_cheese_hamburg.png",
                nigiriName:"susi6",
                nigiriPrice:"6円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_maguro_umakara_negimori.png",
                nigiriName:"susi7",
                nigiriPrice:"7円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_umakaranegi_ebi.png",
                nigiriName:"susi8",
                nigiriPrice:""
            }]

        ,gunkanProducts = [{
                nigiriSrc:"	https://www.hama-sushi.co.jp/assets/menu/img/gunkan/pho_karaage_garlic.png",
                nigiriName:"susi10",
                nigiriPrice:"10円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_cheese_hamburg.png",
                nigiriName:"susi11",
                nigiriPrice:"11円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_loastbeef_yamawasabi.png",
                nigiriName:"susi12",
                nigiriPrice:"12円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_aburitamago_cheese.png",
                nigiriName:"susi13",
                nigiriPrice:"13円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_aburi_ebi_mayo.png",
                nigiriName:"susi14",
                nigiriPrice:"14円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_z_tennenakaebi_siolemon.png",
                nigiriName:"susi15",
                nigiriPrice:"15円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_cheese_hamburg.png",
                nigiriName:"susi16",
                nigiriPrice:"16円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_maguro_umakara_negimori.png",
                nigiriName:"susi17",
                nigiriPrice:"17円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_umakaranegi_ebi.png",
                nigiriName:"susi18",
                nigiriPrice:"18円"
            }]

        ,dessertProducts = [{
                nigiriSrc:"https://hamsonic.net/wp-content/uploads/2019/06/6-min-1-768x510.jpg",
                nigiriName:"いちご豆腐",
                nigiriPrice:"20円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_cheese_hamburg.png",
                nigiriName:"susi21",
                nigiriPrice:"21円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_loastbeef_yamawasabi.png",
                nigiriName:"susi22",
                nigiriPrice:"22円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_aburitamago_cheese.png",
                nigiriName:"susi23",
                nigiriPrice:"23円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_aburi_ebi_mayo.png",
                nigiriName:"susi24",
                nigiriPrice:"24円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_z_tennenakaebi_siolemon.png",
                nigiriName:"susi25",
                nigiriPrice:"25円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_cheese_hamburg.png",
                nigiriName:"susi26",
                nigiriPrice:"26円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_maguro_umakara_negimori.png",
                nigiriName:"susi27",
                nigiriPrice:"27円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_umakaranegi_ebi.png",
                nigiriName:"susi28",
                nigiriPrice:"28円"
            }]

        ,hamburgerProducts = [{
                nigiriSrc:"https://www.mcd-holdings.co.jp/news/2008/promotion/img/1126-1.jpg",
                nigiriName:"バーガー",
                nigiriPrice:"30円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_cheese_hamburg.png",
                nigiriName:"susi31",
                nigiriPrice:"31円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_loastbeef_yamawasabi.png",
                nigiriName:"susi32",
                nigiriPrice:"32円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_aburitamago_cheese.png",
                nigiriName:"susi33",
                nigiriPrice:"33円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_aburi_ebi_mayo.png",
                nigiriName:"susi34",
                nigiriPrice:"34円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_z_tennenakaebi_siolemon.png",
                nigiriName:"susi35",
                nigiriPrice:"35円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_cheese_hamburg.png",
                nigiriName:"susi36",
                nigiriPrice:"36円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_maguro_umakara_negimori.png",
                nigiriName:"susi37",
                nigiriPrice:"37円"
            },{
                nigiriSrc:hamaSushiURL+"/nigiri/pho_umakaranegi_ebi.png",
                nigiriName:"susi38",
                nigiriPrice:"38円"
            }]
        ];
        
        //９個書き換え
        let productNum = 0;
        while(productNum < $productImgs.length){
            //URLか名前か値段が空なら準備中画像を表示
            const nNum = nigiriProducts[productNum];
            if ( nNum.nigiriSrc === "" || nNum.nigiriName === "" || nNum.nigiriPrice === "" ){
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
        let basket = [];
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
                basket.name = $clickProductText.getElementsByClassName("productName")[0].innerText;
                basket.price = $clickProductText.getElementsByClassName("productPrice")[0].innerText;
                //配列の商品を書き換える
                $window2.getElementsByTagName("td")[0].innerText = basket.name;
                $window2.getElementsByTagName("td")[1].innerText = basket.price;
                console.log(basket)
            }else{
            //二回目以降の処理
                
                //テーブル追加構文～
                let $table = $window2.getElementById('table');
                let newRow = $table.insertRow();
                let newCell = newRow.insertCell();
                newCell.appendChild(document.createTextNode('仮商品'));
                newCell = newRow.insertCell();
                newCell.appendChild(document.createTextNode('X円'));
                //～テーブル追加構文
            }
        }
            //「かご」をクリックしたらorderClickイベントへ、、、↑↑↑
            for( let orderindex = 0 ; orderindex < document.querySelectorAll("[data-img]").length ; orderindex++ ){
                $doc.getElementsByClassName("productOrder")[orderindex].addEventListener("click", (e) => orderClick(e));
            }
})();