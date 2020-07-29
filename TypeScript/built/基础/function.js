/*
function
*/
// 函数声明
function sum(x, y) {
    return x + y;
}
// 函数表达式
var mySum1 = function (x, y) {
    return x + y;
};
var mySum2 = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
/*
  可选参数
*/
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat1 = buildName("Tom", "Cat");
var tom1 = buildName("Tom");
/*
参数默认值
*/
function buildName2(firstName, lastName) {
    if (firstName === void 0) { firstName = "Tom"; }
    return firstName + " " + lastName;
}
var tomcat2 = buildName2("Tom", "Cat");
var cat2 = buildName2(undefined, "Cat");
//不受 可选参数必须接在必需参数后面
/*
剩余参数
*/
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
/*
重载
*/
function reverse(x) {
    if (typeof x === "number") {
        return Number(x
            .toString()
            .split("")
            .reverse()
            .join(""));
    }
    else if (typeof x === "string") {
        return x
            .split("")
            .reverse()
            .join("");
    }
}
