/*
使用「类型 + 方括号」来表示数组
*/

let fibonacci: number[] = [1, 1, 2, 3, 5];
/*
  数组泛型（Array Generic） Array<elemType> 来表示数组
*/

let fibonacci2: Array<number> = [1, 1, 2, 3, 5];

/*
  接口数组
*/

interface NumberArray {
  [index: number]: number;
}
let fibonacci3: NumberArray = [1, 1, 2, 3, 5];

/*
  类数组
*/

function likeArray() {
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}

// 事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等
function likeArray2() {
  let args: IArguments = arguments;
}

/*
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
*/

/*
  一般数组
*/

let list: any[] = ["123", "av", 1, 2, { a: 123, b: "a" }];
