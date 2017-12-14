function add(x, y) {
  return x + y;
}

console.log(add(4,4));


function isBigger(a, b) {
  if (a > b) {
    console.log(“BIGGER!!!“);
  } else {
    console.log(“SMALLER”);
  }
}

isBigger(5, 7);
isBigger(9, 7);

function yell(person) {
  console.log(“HELLOOOOOOOO!!!! ” + person);
  console.log(person + “is coool!!!“);
}

yell(“jeff”);
yell(“sam”);
yell(“amin”);
yell(“joy”);




var number = 5;

function subtractVal(val) {
  number = number - val;
}

subtractVal(2);
subtractVal(1);

console.log(number);