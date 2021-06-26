//Scope of the variable;

var output = 10;
console.log(output);
function test(s) {
    output += s;
}

test(30);
console.log(output);
console.log(output + 100);
