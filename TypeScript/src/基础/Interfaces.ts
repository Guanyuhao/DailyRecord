/*
interface 
*/

// 赋值的时候，变量的形状必须和接口的形状保持一致
interface UsaPreson {
  readonly id: number;
  name: string;
  age: number;
  sex?: boolean | number; // 可选属性
  [propName: string]: any; // 任意属性,一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
}
let tom: UsaPreson = {
  id: 1,
  name: "Tom",
  age: 25
};
let jack: UsaPreson = {
  id: 2,
  name: "jack",
  age: 23,
  sex: 1
};
