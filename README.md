## recounter - Recursion Counter

A simple utility wrapper for recursive functions, adding a `callCount` key and
`clearCallCount()` method. Requires reassigning the original function, so it's
mostly useful for testing.

Use like this:

```javascript
const recounter = require('recounter')

function countDownToZero(number){
  if(number < 1){
    console.log('Done!')
    return 0
  }
  console.log(number)
  number--
  return countDownToZero(number)
}

countDownToZero = recounter(countDownToZero)

countDownToZero(10)
console.log(countDownToZero.callCount) // -> 10
countDownToZero.clearCallCount()
console.log(countDownToZero.callCount) // -> 0

```
