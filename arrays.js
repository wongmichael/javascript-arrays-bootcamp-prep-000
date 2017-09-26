var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(array,n){
  return [n,...array]
}
function destructivelyAddElementToBeginningOfArray(array,n){
  return array.unshift(n)
}
function addElementToEndOfArray(array,n){
  return [...array,n]
}
funciton destructivelyAddElementToEndOfArray(array,n){
  return array.push(n)
}
function accessElementInArray(array,n){
  return array[n]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1)
}
