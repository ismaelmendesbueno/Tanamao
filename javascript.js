(function readyJS(win,doc){
    'use strict';

    let btn=doc.querySelector("#btn");
    let menu=doc.querySelector(".menuu");
    

    function toggle(event) {
        if(menu.classList.contains("show")){
            menu.classList.remove("show");
            btn.setAttribute("src","button.png");
           
        }else{
            menu.classList.add("show");
            btn.setAttribute("src","close.png");
            
        }
    }
    btn.addEventListener("click",toggle,false);
})(window, document);