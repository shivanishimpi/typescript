//console.log('Time to code!!');
function sum(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const num1 = 7.8;
const num2 = 1.8;
const print_Result = true;
const resPhrase = "Output: ";
const resultPh = sum(num1, num2, print_Result, resPhrase);
console.log(resultPh);
