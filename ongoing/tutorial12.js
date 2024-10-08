/*
  how js work (call stack main)
   head recursion
    tail recursion
     

*/

// function colors() {
//   let number = 23;
//   console.log(number);
// }

// function days() {
//   colors();
// }

// function fruits() {
//   days();
// }

// function topFun() {
//   fruits();
// }

// topFun();

 function test(x){
     console.log(x);
      if(x>0){
         test(x-1)
      }
    //    console.log(x)
 }

  test(5)