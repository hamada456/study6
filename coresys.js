(() => {

    const $doc = document;
    const $btn = $doc.getElementById("js-btn");
    const $nav = $btn.querySelectorAll("[data-nav]");
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
                nigiriSrc:"https://www.hama-sushi.co.jp/assets/menu/img/nigiri/pho_gyukarubimayo.png",
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
        ];
        //最初の会社ロゴを消す
        document.getElementsByClassName("btns")[0].addEventListener("click" , () => {
            document.getElementsByClassName("main-img")[0].style.display = "none";
        });

        
        //９個書き換え
        let productNum = 0;
        while(productNum < $product.length){
            //URLか名前か値段が空なら準備中画像を表示
            if ( nigiriProducts[productNum].nigiriSrc === "" | nigiriProducts[productNum].nigiriName === "" | nigiriProducts[productNum].nigiriPrice === "" ){
                document.querySelectorAll('[data-img]')[productNum].src = "./images/準備中.png";
                document.querySelectorAll('[data-name]')[productNum].textContent = "";
                document.querySelectorAll('[data-price]')[productNum].textContent = "";
            }else{
                document.querySelectorAll('[data-img]')[productNum].src = nigiriProducts[productNum].nigiriSrc;
                document.querySelectorAll('[data-name]')[productNum].textContent = nigiriProducts[productNum].nigiriName;
                document.querySelectorAll('[data-price]')[productNum].textContent = nigiriProducts[productNum].nigiriPrice;
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

})();