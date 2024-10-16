  let data=[1,2,3,4,5,6];
  // position 2 matlab 3 lai delete garne

  let position=2;

   for(let i=position;i<data.length;i++){
    data[i]=data[i+1]
   }
   data.length=data.length-1;

    console.log(data)

    // algorithm
    // u should have the position from where u want to remove the number
    // start the loop from the position
    // data[i]=data[i+1];
    // last ko value will be undefined to remove that just decrease the length of the array
    