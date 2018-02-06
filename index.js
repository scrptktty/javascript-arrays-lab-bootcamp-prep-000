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
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(kittens) {
  return kittens.slice(1)
}