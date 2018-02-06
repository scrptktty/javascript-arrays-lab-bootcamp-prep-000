const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(kittens, name) {
  kittens.pop(name)
  return kittens
}

// function destructivelyRemoveElementFromEndOfArray(a, b) {
//   a.pop(b)
//   return a
// }

function destructivelyRemoveFirstKitten() {}

function appendKitten(name) {}

function prependKitten(name) {}

function removeLastKitten() { 
  return kittens.pop()
}

function removeFirstKitten() {
  return kitten.slice(0)
}