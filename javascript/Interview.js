// 防抖
function debound(fn, dealy) {
  let timer = null
  return function () {
    let arg = arguments
    let context = this
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      fn && fn.apply(context, arg)
    }, num)
  }
}
// 原型 链
/*
 * 实例的__proto__属性（原型）等于其构造函数的prototype属性
 */

;(function () {
  function Person(name) {
    this.name = name
  }
  let p = new Person("Tom")

  p.__proto__ === Person.prototype
  Person.__proto__ === Function.prototype
})()

/*
    构造函数不需要显示的返回值。
    使用new来创建对象(调用构造函数)时，如果return的是非对象(数字、字符串、布尔类型等)会忽而略返回值;
    如果return的是对象，则返回该对象(注：若return null也会忽略返回值
  */
// p 是什么
;(function () {
  function Person(name) {
    this.name = name
    return name
  }
  let p = new Person("Tom")
  // {name: "Tom"}
})()
;(function () {
  function Person(name) {
    this.name = name
    return {}
  }
  let p = new Person("Tom")
})()

// {}
/*
  new 实现
*/
function newObj() {
  let p = (function () {
    let obj = {}
    obj.__proto__ = Person.prototype

    // 其他赋值语句...

    return obj
  })()
}

/*
  instanceof
*/
function dicInstanceof(x) {
  while (x.__proto__ !== null) {
    if (x.__proto__ === y.prototype) {
      return true
    }
    x.__proto__ = x.__proto__.proto__
  }
  if (x.__proto__ == null) {
    return false
  }
}
