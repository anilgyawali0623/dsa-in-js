 let data=[24,1,3,4,42,5,13,9];
 let current,j;
  for(let i=1;i<data.length;i++){
      current= data[i];
       j=i-1;
      while(j>=0 && current<data[j]){
 data[j+1]= data[j];
      }
  }