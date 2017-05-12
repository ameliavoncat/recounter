function recount(func){
  newFunc = function(...args) {
    newFunc.callCount++
    return func(...args)
  }
  newFunc.callCount = 0

  newFunc.clearCallCount = function() {
    return newFunc.callCount = 0
  }

  newFunc.restore = function() {
    return func
  }

  return newFunc
}

module.exports = recount
