function sum(n1: number, n2: number): number {
  //return type
  return +n1 + +n2;
}
function printRes(num:number):void{
  console.log('Result is:'+num)
}
printRes(sum(9,10));

function AddandHandle(a:number,b:number,cb:(val:number)=>void){
  const result= a+b;
  cb(result);
}

let combineVal:(a:number,b:number)=>number; //Function type
combineVal=sum;
printRes(combineVal(30,05));

AddandHandle(30,05,(result) =>{
  console.log(result)
}
)