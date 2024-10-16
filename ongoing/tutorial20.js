// linear search

let data = [3, 4, 33, 9, 53, 236, 64, 2345];
let find = 9;
 let position= undefined;
 for (let i = 0; i < data.length; i++) {
    
     if(data[i]===find){
          position=i;
           break;
     }
 }

  console.log(position)