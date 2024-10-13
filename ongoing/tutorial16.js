let data = [];
let currentSize = data.length;
let maxValue = 5;
function push(newVal) {
  data[currentSize] = newVal;
  currentSize += 1;
}
function pop() {
  let lastRemovedItem = data[currentSize];
  currentSize -= 1;
  data.length = currentSize;
  return lastRemovedItem;
}

function reverseStr(item) {
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }

  for (let i = 0; i < item.length; i++) {
    item[i] = pop();
  }
}
let str = "anil";
str = str.split("");

reverseStr(str);

console.log(data);
