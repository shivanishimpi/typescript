//Union Types and Literal Types
type numStr = number | string; //Alias
type numTex = "as-number" | "as-text";

function combine(input1: numStr, input2: numStr, resultConversion: numTex) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  /*
  if (resultConversion==="as-number"){
    return +result; //converts it to a number or an alternative could be parseFloat(result)
  } else {
    return result.toString();  
  }
  */
  return result;
}
console.log(combine(30, 05, "as-number"));
console.log(combine("Sunshine", "Cookie", "as-text"));
console.log(combine("30", "05", "as-number"));
