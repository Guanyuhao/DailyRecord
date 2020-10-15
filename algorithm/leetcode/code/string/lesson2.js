export default (s)=>{
  //输入 输出
	// 终止条件 s.length <=2
	if (s.length < 2)return 0;
	let sum = 0
	function again(s){
		if(s.length == 2 ){
			if(s[0] !== s[1]){
				sum+=1
			}
			return
		}
		let result = [s[0]]
		let results = []
		for(var i = 1 ; i<s.length; i++){
			if(s[i] === result[0]){
				result.push(s[i])
				if(results.length > 0){
					if(result.length > results.length){
						sum+=1
						s = s.slice((result.length-results.length -1 ))
						break;
					}
				}
			}else{
				results.push(s[i])
				if(result.length === results.length){
					sum+=1
					break;
				}
			}
		}
		again(s.slice(1,s.length))
	}
	again(s)
	return sum
}
/*
// 别人的思路
// 我认为这个测试用例不合理，无论在面试中还是实际应用中这个算法思路都是足够用的
// 我建议大家不要为了刷题而刷题
export default (str) => {
  // 建立数据结构，堆栈，保存数据
  let r = []
  // 给定任意子输入都返回第一个符合条件的子串
  let match = (str) => {
    let j = str.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
      return RegExp.$1
    } else {
      return ''
    }
  }
  // 通过for循环控制程序运行的流程
  for (let i = 0, len = str.length - 1; i < len; i++) {
    let sub = match(str.slice(i))
    if (sub) {
      r.push(sub)
    }
  }
  return r.length
}
*/
/*
	//官方 例如 s = 00111011  counts={2,3,1,2}。 满足条件的子串数目为  min {u,v}
	var countBinarySubstrings = function(s) {
    let ptr = 0, n = s.length, last = 0, ans = 0;
    while (ptr < n) {
        const c = s.charAt(ptr);
        let count = 0;
        while (ptr < n && s.charAt(ptr) === c) {
            ++ptr;
            ++count;
        }
        ans += Math.min(count, last);
        last = count;
    }
    return ans;
};
*/