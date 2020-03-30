// 斐波那契数列求第n项

// 递归
function recurFib(n) {
  if (n <= 2) {
    return 1
  }

  return recurFib(n - 1) + recurFib(n - 2)
}

// 尾递归优化
// https://es6.ruanyifeng.com/#docs/function#%E5%B0%BE%E8%B0%83%E7%94%A8%E4%BC%98%E5%8C%96
function recurFib2(n, ac1 = 1, ac2 = 1) {
  if (n <= 2) {
    return ac2
  }

  return recurFib2(n - 1, ac2, ac1 + ac2)
}

// 动态规划
function dynFib(n) {
  if (n == 1 || n == 2) {
    return 1
  } else {
    let val = [1, 1]
    for (let i = 2; i < n; i++) {
      val[i] = val[i - 1] + val[i - 2]
    }
    return val[n - 1]
  }
}

// 迭代
function iterFib(n) {
  let last = 1
  let nextLast = 1
  let result = 1
  for (let i = 2; i < n; i++) {
    result = last + nextLast
    nextLast = last
    last = result
  }
  return result
}

const n = 40
calTime(recurFib, n, '递归')
calTime(recurFib2, n, '尾递归优化')
calTime(dynFib, n, '动态规划')
calTime(iterFib, n, '迭代')

function calTime(fn, n, desc) {
  let start = new Date().getTime()
  console.log(fn(n))
  let stop = new Date().getTime()
  console.log(desc + '计算耗时 ' + (stop - start) + ' 毫秒 ')
}
