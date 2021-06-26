
var elementGrab=document.getElementById("yellow");
elementGrab.onclick=function(){
    document.getElementById("heading").style.color="yellow";
    setTimeout(func,5000);
    function func() {
        window.location.reload();
        
    }
}

