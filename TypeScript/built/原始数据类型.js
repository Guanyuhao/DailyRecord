/*
  Boolean
*/
var isDone = false;
// 编译通过
// 后面约定，未强调编译错误的代码片段，默认为编译通过
// 使用构造函数 Boolean 创造的对象不是布尔值
// let createdByNewBoolean: boolean = new Boolean(1);
// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
// 事实上 new Boolean() 返回的是一个 Boolean 对象
var createdByNewBoolean = new Boolean(1);
//在 TypeScript 中，boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数
/*
  number
*/
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
/*
 string
*/
var myName = "Tom";
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
/*
Void  JavaScript 没有空值
 TypeScript  void 表示没有任何返回值的函
*/
function alertName() {
    alert("My name is Tom");
}
// void 只能赋值为 undefined , null
var unusable = undefined;
/*
  null
  undefined
*/
var isNull = null;
var isUndefined = undefined;
/*
  null, undefined , void
  区别
*/
// 这样不会报错
var num = isUndefined;
// let u: void;
// let num: number = u;
// Type 'void' is not assignable to type 'number'.
