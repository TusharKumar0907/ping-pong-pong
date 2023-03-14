
function changeCSS() {
    
    var y = document.getElementById("link");

    var currtheme = y.getAttribute("href");
    
    if(currtheme=="musc11.css"){
        y.setAttribute("href" , "musc1.css");
    }
    else{
        y.setAttribute("href" , "musc11.css");
    }
   

        


}
