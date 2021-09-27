Функция перемешивания массива
function mixarr(arr){
   return arr.map(i=>[Math.random(), i]).sort().map(i=>i[1])
