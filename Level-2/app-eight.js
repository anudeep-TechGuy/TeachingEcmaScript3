//OnFOCUS functionality
var getStuff = document.getElementById("email");
getStuff.onfocus = function () {
    if (getStuff.value == "Enter your email") {
        getStuff.value = " ";
    }

};
//OnBLUR functionaity
getStuff.onblur = function () {
    if (getStuff.value = " ") {
        getStuff.value = "Enter your email address"
    }
};