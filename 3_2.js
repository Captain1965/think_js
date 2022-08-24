const cache = () => {
  let cacheResult = {}
  return (a,b) => {                         
  if (a in cacheResult && b in cacheResult[a]) {return {Value: cacheResult[a][b], fromCache: true}}
    else { cacheResult[a] = {} 
      cacheResult[a][b] = a ** b 
     return {Value: cacheResult[a][b], fromCache: false}
    }
  }
} 
calculate = cache()
console.log(calculate(2, 3))
console.log(calculate(2, 3))
console.log(calculate(3, 3))
console.log(calculate(3, 3))
console.log(calculate(2, 3))
