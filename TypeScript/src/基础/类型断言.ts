/*
  <类型>值
  值 as 类型
*/
function assertGetLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}

// 使用类型断言，将 something 断言成 string

//类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的

/*
function toBoolean(something: string | number): boolean {
    return <boolean>something;
}
// Type 'string | number' cannot be converted to type 'boolean'.
//   Type 'number' is not comparable to type 'boolean'.
*/
