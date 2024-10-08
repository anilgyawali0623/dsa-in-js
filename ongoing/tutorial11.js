/*


 indirect recursion



*/

let money = 100;
let apple = 0;

function buyApple(x) {
  if (x > 0) {
     console.log("i have ", x, "rs", apple);
    buyMore(x-10);
  } else {
    console.log(" i dont have more mone");
  }
}

function buyMore(x) {
     apple--;
     buyApple(x-10);

}

buyApple(money);
