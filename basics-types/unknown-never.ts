//Unknown type: more restrictive than _any_ type
let userInput: unknown;
let userName: string;
userInput = 5;
userInput = "Cookie";
if (typeof userInput === "string") {
  userName = userInput;
}

//never type
//it returns never hence void can be replaced by never
function genError(msg: string, code: number): void {
  throw { message: msg, errorCode: code };
}

genError("Error: Not Found", 404);
