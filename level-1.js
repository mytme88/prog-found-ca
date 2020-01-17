// qusetion 1
var pet = "dog";

// qusetion 2
var person = {
  name: "Yoda",
  age: 900
};

// qusetion 3
var outOfStock = true;

if (outOfStock === true) {
  console.log("This item is out of stock");
} else {
  console.log("This item is in stock");
}

// qusetion 4
var array = [0, 1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// qusetion 5
for (var i = 15; i <= 25; i++) {
  console.log(i);
}

// qusetion 6
for (var i = 15; i <= 25; i++) {
  if (i === 20) {
    console.log(i);
  }
}

// qusetion 7
var arr = [
  {
    name: "Yoda",
    age: 900,
    isDead: true
  },
  {
    name: "Obi-Wan Kenobi",
    age: 57,
    isDead: true
  }
];

for (var i = 0; i < arr.length; i++) {
  console.log("age:", arr[i].age, "is sweet:", arr[i].isSweet);
}

// qusetion 8
function whatIDontLike(item) {
  console.log(item);
}

whatIDontLike("ineffective loops");
// question 9
function subtract({ n1, n2 }) {
  console.log("result:", n1 - n2);
}

subtract({ n1: 10, n2: 5 });

// question 10
var arr = [];

function addToArray(item) {
  arr.push(item);
}
addToArray("Chocolate Egg");
{
  console.log(arr);
}
