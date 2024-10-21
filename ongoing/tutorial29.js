// map

let data = new Map([
  ["name", "anil"],
  [true, "anil"],
]);

data.set("color", "green");
// console.log(data);
//  console.log(data.size)
// console.log(data.keys(true));
// console.log(data.get("color"));

for (x of data) {
  console.log(x);
}
