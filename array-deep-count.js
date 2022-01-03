// Array Deep Count
// https://www.codewars.com/kata/596f72bbe7cd7296d1000029

function deepCount(arrD) {
  let sum = 0;
  let returnNumberFromArray = function (arrC) {
    for (let i=0; i<arrC.length; i++) {
      console.log(`i=${i}`)
      if (Array.isArray(arrC[i])) {
        console.log('this is array')
        console.log(arrC[i])
        sum += 1;
        returnNumberFromArray(arrC[i])
      } else {
        console.log('this element is NOT array')
        console.log(arrC[i])
        sum += 1;
      }
      
    }
    
  }
  returnNumberFromArray(arrD);
  return sum
}
