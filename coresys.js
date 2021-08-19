(() => {
    
    const $doc = document;
    const $btn = $doc.getElementById("js-btn");
    const $nav = $btn.querySelectorAll("[data-nav]");
    const $img = document.querySelectorAll("[data-img]");
    const $content = $btn.querySelectorAll("[data-content]");

    const $product = document.querySelectorAll("[data-img]");

    //初期化
    const init = () => {
        document.getElementsByClassName("main-img")[0].style.display = "block";
    };
    init();

    //、、、↓↓↓クリックしたら起こるイベント
    const btnClick = (e) => {

        const products = [
        nigiriProducts = [{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_gyukarubimayo.png",
                nigiriName:"susi0",
                nigiriPrice:"0円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_cheese_hamburg.png",
                nigiriName:"susi1",
                nigiriPrice:"1円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_loastbeef_yamawasabi.png",
                nigiriName:"susi2",
                nigiriPrice:"2円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_aburitamago_cheese.png",
                nigiriName:"susi3",
                nigiriPrice:"3円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_aburi_ebi_mayo.png",
                nigiriName:"susi4",
                nigiriPrice:"4円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_z_tennenakaebi_siolemon.png",
                nigiriName:"susi5",
                nigiriPrice:"5円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_cheese_hamburg.png",
                nigiriName:"susi6",
                nigiriPrice:"6円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_maguro_umakara_negimori.png",
                nigiriName:"susi7",
                nigiriPrice:"7円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_umakaranegi_ebi.png",
                nigiriName:"susi8",
                nigiriPrice:""
            }]

        ,gunkanProducts = [{
                nigiriSrc:"	https://www.hama-sushi.co.jp/assets/menu/img/gunkan/pho_karaage_garlic.png",
                nigiriName:"susi10",
                nigiriPrice:"10円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_cheese_hamburg.png",
                nigiriName:"susi11",
                nigiriPrice:"11円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_loastbeef_yamawasabi.png",
                nigiriName:"susi12",
                nigiriPrice:"12円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_aburitamago_cheese.png",
                nigiriName:"susi13",
                nigiriPrice:"13円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_aburi_ebi_mayo.png",
                nigiriName:"susi14",
                nigiriPrice:"14円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_z_tennenakaebi_siolemon.png",
                nigiriName:"susi15",
                nigiriPrice:"15円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_cheese_hamburg.png",
                nigiriName:"susi16",
                nigiriPrice:"16円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_maguro_umakara_negimori.png",
                nigiriName:"susi17",
                nigiriPrice:"17円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_umakaranegi_ebi.png",
                nigiriName:"susi18",
                nigiriPrice:"18円"
            }]

        ,dessertProducts = [{
                nigiriSrc:"https://hamsonic.net/wp-content/uploads/2019/06/6-min-1-768x510.jpg",
                nigiriName:"いちご豆腐",
                nigiriPrice:"20円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_cheese_hamburg.png",
                nigiriName:"susi21",
                nigiriPrice:"21円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_loastbeef_yamawasabi.png",
                nigiriName:"susi22",
                nigiriPrice:"22円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_aburitamago_cheese.png",
                nigiriName:"susi23",
                nigiriPrice:"23円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_aburi_ebi_mayo.png",
                nigiriName:"susi24",
                nigiriPrice:"24円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_z_tennenakaebi_siolemon.png",
                nigiriName:"susi25",
                nigiriPrice:"25円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_cheese_hamburg.png",
                nigiriName:"susi26",
                nigiriPrice:"26円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_maguro_umakara_negimori.png",
                nigiriName:"susi27",
                nigiriPrice:"27円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_umakaranegi_ebi.png",
                nigiriName:"susi28",
                nigiriPrice:"28円"
            }]

        ,hamburgerProducts = [{
                nigiriSrc:"https://www.mcd-holdings.co.jp/news/2008/promotion/img/1126-1.jpg",
                nigiriName:"バーガー",
                nigiriPrice:"30円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_cheese_hamburg.png",
                nigiriName:"susi31",
                nigiriPrice:"31円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_loastbeef_yamawasabi.png",
                nigiriName:"susi32",
                nigiriPrice:"32円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_aburitamago_cheese.png",
                nigiriName:"susi33",
                nigiriPrice:"33円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_aburi_ebi_mayo.png",
                nigiriName:"susi34",
                nigiriPrice:"34円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_z_tennenakaebi_siolemon.png",
                nigiriName:"susi35",
                nigiriPrice:"35円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_cheese_hamburg.png",
                nigiriName:"susi36",
                nigiriPrice:"36円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_maguro_umakara_negimori.png",
                nigiriName:"susi37",
                nigiriPrice:"37円"
            },{
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_umakaranegi_ebi.png",
                nigiriName:"susi38",
                nigiriPrice:"38円"
            }]
        ];
        //最初の会社ロゴを消す
        document.getElementsByClassName("btns")[0].addEventListener("click" , () => {
            document.getElementsByClassName("main-img")[0].style.display = "none";
        });

        const $this = e.target;//クリックした物を取る
        const targetVal = $this.dataset.nav;//クリックデータ属性の値を取る

        //対象のコンテンツをアクティブ化する、product-imgs///' + targetVal +'を0にしてもOK
        const $productimgs = document.querySelectorAll('[data-content="0"]')[0];
        $productimgs.style.display = "block";

        //９個書き換え
        let productNum = 0;
        while(productNum < $product.length){
            //URLか名前か値段が空なら準備中画像を表示
            if ( nigiriProducts[productNum].nigiriSrc === "" | nigiriProducts[productNum].nigiriName === "" | nigiriProducts[productNum].nigiriPrice === "" ){
                document.querySelectorAll('[data-img]')[productNum].src = "./images/準備中.png";
                document.querySelectorAll('[data-name]')[productNum].textContent = "準備中";
                document.querySelectorAll('[data-price]')[productNum].textContent = "準備中";
            }else{
                document.querySelectorAll('[data-img]')[productNum].src = products[targetVal][productNum].nigiriSrc;
                document.querySelectorAll('[data-name]')[productNum].textContent = products[targetVal][productNum].nigiriName;
                document.querySelectorAll('[data-price]')[productNum].textContent = products[targetVal][productNum].nigiriPrice;
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
                window.open( e.target.currentSrc , width=50 , heigth=50 );
           // }
        }

        //画像をクリックしたらimgClickイベントへ、、、↑↑↑
        let indeximg = 0;
        while(indeximg < $img.length){
            $img[indeximg].addEventListener("click", (e) => imgClick(e));
            indeximg++;
        }

        //、、、↓↓↓orderClickイベント
        //window.onload = function() {
        const orderClick = () => {
            //console.log(document.getElementById("window2").contentWindow.document.getElementById("productAdd"));
            console.log("test");
            window.parent.document.getElementById("window2").contentWindow.document.getElementById("productAdd").innerText = "aaa";
            console.log("test2");
        }

        //「かご」をクリックしたらorderClickイベントへ、、、↑↑↑
        for( let orderindex = 0 ; orderindex < document.querySelectorAll("[data-img]").length ; orderindex++ ){
            document.getElementsByClassName("productOrder")[orderindex].addEventListener("click", () => orderClick());
        }
        //}
})();