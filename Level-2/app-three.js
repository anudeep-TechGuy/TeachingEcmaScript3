var rough = document.getElementById("stuff");
rough.innerHTML = "<h1>Hello</h1>";
//First Create an element
var headingOne = document.createElement("h1");
console.log(headingOne);
//rough.appendChild(headingOne);
//headingOne.appendChild(text);
var headingTwo = document.createElement("h2");

var text2 = "Ankith Nayakoti";
headingTwo.innerHTML = text2;
var text = document.createTextNode("Anudeep Naykoti");
headingOne.appendChild(text);


var paragraph = document.createElement("p");
var textInsidetheParagraph = document.createTextNode("This is the text lying inside the Paragraph");
paragraph.appendChild(textInsidetheParagraph);

//document.getElementBy
document.getElementById("stuff").appendChild(headingOne);
document.getElementById("stuff").appendChild(headingTwo);
document.getElementById("stuff").appendChild(paragraph);