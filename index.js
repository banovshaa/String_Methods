function capitalize(str) {
  return str
    .split(" ")
    .map((element) => {
      return element.charAt(0).toUpperCase() + element.slice(1);
    })
    .join(" ");
}

// console.log(capitalize("hello world"));
let ad = "Name";
//indexof charat
function FindSecondLowest(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let secondMin = arr[1];
  return secondMin;
}
function findSecondLowest(arr) {
  return arr.sort((a, b) => a - b)[0];
}

function alterString(str) {
  return str
    .split("")
    .map((char) => {
      if (char === char.toLowerCase()) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
}
console.log(alterString("heLlO"));
