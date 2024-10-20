// // binary search

// let data = [4, 54, 31, 12, 41, 64, 22, 4, 1, 3, 5, 56].sort((a, b) => a - b);
// console.log(data);
// let start = 0;
// let find = 22;
// let end = data.length - 1;
// let position = undefined;
// while (start <= end) {
//   let mid = Math.floor((start + end) / 2);
//   if (data[mid] === find) {
//     position = mid;
//     break;
//   } else if (data[mid] < find) {
//     start = mid + 1;
//   } else {
//     end = mid - 1;
//   }
// }

//  console.log(position)

// pratice for the binary search
let data = [2, 53, 23, 45, 1, 3, 9, 4, 13].sort((a, b) => a - b);
 console.log(data)
let start = 0;
let end = data.length - 1;
let position = undefined;
const find = 45;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (data[mid] === find) {
    position = mid;
    break;
  } else if (data[mid] < find) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(position);
