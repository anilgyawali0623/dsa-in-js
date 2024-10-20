// deleting the element from the arrray
let data = [12, 3, 4, 4, 123, 4, 1];
console.log(data.length);
let postion = 2;

for (let i = postion; i < data.length - 1; i++) {
  data[i] = data[i + 1];
}
data.length = data.length - 1;

console.log(data);
