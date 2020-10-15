export default (str) => (str.split(" ").map(item=>(item.split("").reverse().join(""))).join(" "))

// export default (str) => (str.split(/\s/g).map(item=>(item.split("").reverse().join(""))).join(" "))

// export default (str) => (str.match(/[\w']+/g).map(item=>(item.split("").reverse().join(""))).join(" "))


