function sum(num) {
  if (num === 0) {
    return 0
  } else {
    let res = num + sum(--num)
    console.log(res)
    return res
  }
}

sum(2) //10
