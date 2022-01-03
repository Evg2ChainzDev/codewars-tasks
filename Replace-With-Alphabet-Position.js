// Replace With Alphabet Position
// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  let a = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z' ];  
  let sumString = ``;
    for (let i=0; i<text.length; i++){
        let upKey = text[i].toUpperCase();
        let aInd = a.indexOf(upKey) + 1
        // console.log(aInd);
        if ( aInd != 0 ) {
            sumString += `${aInd} `;
            // console.log(sumString)
        }

    }
    sumString = sumString.substring(0, sumString.length - 1);
    return sumString;
}
