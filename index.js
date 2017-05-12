function recount(func){
  const newFunc = function() {
    newFunc.callCount++
    return func.apply(null, Array.prototype.slice.call(arguments))
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
