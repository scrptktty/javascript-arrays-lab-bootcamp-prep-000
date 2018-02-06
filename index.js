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
  return [name, ...kittens]
}

//Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

function prependKitten(name) {}

function removeLastKitten() { 
  return kittens.pop()
}

function removeFirstKitten() {
  return kitten.slice(0)
}