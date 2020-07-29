/*
联合类型（Union Types）表示取值可以为多种类型中的一种
*/
var unionTypeNumber;
unionTypeNumber = "seven";
unionTypeNumber = 7;
/*
访问联合类型的属性或方法
*/
function getString(something) {
    // return something.length;
    return something.toString();
}
// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
//访问 string 和 number 的共有属性是没问题的
