/*
  Boolean
*/

let isDone: boolean = false;

// 编译通过
// 后面约定，未强调编译错误的代码片段，默认为编译通过

// 使用构造函数 Boolean 创造的对象不是布尔值

// let createdByNewBoolean: boolean = new Boolean(1);

// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.

// 事实上 new Boolean() 返回的是一个 Boolean 对象

let createdByNewBoolean: Boolean = new Boolean(1);

//在 TypeScript 中，boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数

/*
  number
*/

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

/*
 string
*/

let myName: string = "Tom";
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

/*
Void  JavaScript 没有空值
 TypeScript  void 表示没有任何返回值的函
*/
function alertName(): void {
  alert("My name is Tom");
}
// void 只能赋值为 undefined , null
let unusable: void = undefined;

/*
  null
  undefined
*/

let isNull: null = null;

let isUndefined: undefined = undefined;

/*
  null, undefined , void
  区别
*/

// 这样不会报错
let num: number = isUndefined;

// let u: void;
// let num: number = u;

// Type 'void' is not assignable to type 'number'.
