(() => {

    const init = () => {
        document.getElementsByClassName("productAdd")[0].style.display = "block";
    };
    init();

    document.getElementById("0").addEventListener("click", butotnClick);

    function butotnClick(){
        alert('Click');
    }

    

})();