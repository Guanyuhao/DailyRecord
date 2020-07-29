/*
function 
*/
// 函数声明
function sum(x: number, y: number): number {
  return x + y;
}
// 函数表达式
let mySum1 = function(x: number, y: number): number {
  return x + y;
};
let mySum2: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型

/*
用接口定义函数的形状
*/

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
};

/*
  可选参数
*/

function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}
let tomcat1 = buildName("Tom", "Cat");
let tom1 = buildName("Tom");

/*
参数默认值
*/

function buildName2(firstName: string = "Tom", lastName: string) {
  return firstName + " " + lastName;
}
let tomcat2 = buildName2("Tom", "Cat");
let cat2 = buildName2(undefined, "Cat");

//不受 可选参数必须接在必需参数后面

/*
剩余参数
*/

function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
    array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);

/*
重载
*/

function reverse(x: number | string): number | string {
  if (typeof x === "number") {
    return Number(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  } else if (typeof x === "string") {
    return x
      .split("")
      .reverse()
      .join("");
  }
}
