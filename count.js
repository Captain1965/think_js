function count(a){
   var array = a.split('');
   var i = 0;
   while (typeof array[i] === 'string') { 
      i++;
   }
   return(i);       
}
 