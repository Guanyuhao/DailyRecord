/*
使用「类型 + 方括号」来表示数组
*/
var fibonacci = [1, 1, 2, 3, 5];
/*
  数组泛型（Array Generic） Array<elemType> 来表示数组
*/
var fibonacci2 = [1, 1, 2, 3, 5];
var fibonacci3 = [1, 1, 2, 3, 5];
/*
  类数组
*/
function likeArray() {
    var args = arguments;
}
// 事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等
function likeArray2() {
    var args = arguments;
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
var list = ["123", "av", 1, 2, { a: 123, b: "a" }];
