//Practicing to create elements
//First step is to Target the Document where you want to create bunch of code;
var main = document.getElementsByClassName("stuff");
console.log(main);
/* ------------------Heading-One--------------------------------- */
//Lets create an element inside the div
var headerOne = document.createElement("h1");//Specifying the kind of element
//Lets text node inside the element Node
var textInsideH1 = document.createTextNode("Anudeep Nayakoti");
headerOne.appendChild(textInsideH1);
console.log(headerOne);
/*------------------Heading-Two-----------------------------------*/
//Create an element
var headingTwo = document.createElement("h2");//Specify the kind of element
var textInsideH2 = document.createTextNode("Ankith Nayakoti");
headingTwo.appendChild(textInsideH2);
console.log(headingTwo);
/*------------------Heading-Three-----------------------------------*/
var headingThree = document.createElement("h3");
var textInsideH3 = document.createTextNode("Sai Manish Nayakoti");
headingThree.appendChild(textInsideH3);
console.log(headingThree);
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~End of Headings~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

//Print all on the HTML
document.getElementById("stuff").appendChild(headerOne);
document.getElementById("stuff").append(headingTwo);
document.getElementById("stuff").append(headingThree);