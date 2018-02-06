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

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}


function appendKitten(name) {}

function prependKitten(name) {}

function removeLastKitten() { 
  return kittens.pop()
}

function removeFirstKitten() {
  return kitten.slice(0)
}