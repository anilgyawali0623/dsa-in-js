/*
 delete element in array
  understand issue solution with whiteboara
   make array define the positon
    use loop to delete the element
     delete the element with text input and the button

     

*/
let data = [44, 34, 12, 43, 55, 13, 63];
let position = 2;
for (let i = position; i < data.length - 1; i++) {
  data[i] = data[i + 1];
}
data.length = data.length - 1;
console.log(data);

console.log(data.length);
