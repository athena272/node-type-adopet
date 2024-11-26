var apt = 2;
apt = apt << 2;
console.log("🚀 ~ apt:", apt)

variableA = [6, 8];
variableB = [7, 9];
variableC = variableA + variableB;
console.log("🚀 ~ variableC:", variableC)

var profits = 2489.8237;
console.log("🚀 ~ profits:", profits.toFixed(3))

var str = "Is this enough ? ";
var patt1 = new RegExp("[^A-J]");
var result = str.match(patt1);
console.log("🚀 ~ result:", result)
// document.write(result);

var foo = 9;
var bar = 5;
(function() {
    var foo = 2;
    bar = 1;
})();
bar = bar + foo;
console.log("🚀 ~ bar:", bar)
