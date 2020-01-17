// qusetion 1
for (var i = 15; i <= 25; i++) {
  !(i % 2) && console.log(i);
}

// qusetion 2
var innerFunction = function() {
  console.log("i am a function");
};
function outerFunction(aFunc) {
  typeof aFunc === "function" && aFunc();
}
outerFunction(innerFunction);
