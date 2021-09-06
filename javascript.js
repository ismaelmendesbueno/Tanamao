(function readyJS(win,doc){
    'use strict';

    let btn=doc.querySelector("#btn");
    let menu=doc.querySelector(".menuu");
   
    

    function toggle(event) {
        if(menu.classList.contains("show")){
            menu.classList.remove("show");
            
           
        }else{
            menu.classList.add("show");
            
            
        }
    }
    btn.addEventListener("click",toggle,false);
})(window, document);



(function readyJS(win,doc){
    'use strict';

    let btn=doc.querySelector("#service");
    let menu=doc.querySelector(".entregas");
   
    

    function toggle(event) {
        if(menu.classList.contains("active")){
            menu.classList.remove("active");
            
           
        }else{
            menu.classList.add("active");
            
            
        }
    }
    btn.addEventListener("click",toggle,false);
})(window, document);


(function readyJS(win,doc){
    'use strict';

    let btn=doc.querySelector("#services");
    let menu=doc.querySelector(".entrega");
   
    

    function toggle(event) {
        if(menu.classList.contains("active")){
            menu.classList.remove("active");
            
           
        }else{
            menu.classList.add("active");
            
            
        }
    }
    btn.addEventListener("click",toggle,false);
})(window, document);


