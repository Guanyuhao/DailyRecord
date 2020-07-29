/*
新语法索引
*/

/*
declare var 声明全局变量
declare function 声明全局方法
declare class 声明全局类
declare enum 声明全局枚举类型
declare namespace 声明（含有子属性的）全局对象
interface 和 type 声明全局类型
export 导出变量
export namespace 导出（含有子属性的）对象
export default ES6 默认导出
export = commonjs 导出模块
export as namespace UMD 库声明全局变量
declare global 扩展全局变量
declare module 扩展模块
/// <reference /> 三斜线指令
*/

/*
jQuery

declare var jQuery: (selector: string) => any;
jQuery('#foo');

*/

// 声明文件必需以 .d.ts 为后缀 src/jQuery.d.ts
jQuery("#foo");

/*
一般来说，ts 会解析项目中所有的 *.ts 文件，当然也包含以 .d.ts 结尾的文件。所以当我们将 jQuery.d.ts 放到项目中时，其他所有 *.ts 文件就都可以获得 jQuery 的类型定义了
*/

/*
第三方声明文件 
 推荐的是使用 @types 统一管理第三方库的声明文件
 
npm install @types/jquery --save-dev
*/ 