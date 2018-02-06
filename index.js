const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

function appendKitten(name) {
  return [...kittens, name]
}

//end 

function prependKitten(name) {
  return [name, ...kittens]
}

//beginning

function removeLastKitten() { 
  kittens.slice(0, kittens.length - 1)
}

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.


function removeFirstKitten() {
  return kitten.slice(0)
}