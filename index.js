// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

//destructive
const destructivelyAppendCat= name => cats.push(name)
const destructivelyPrependCat = name => cats.unshift(name)
const destructivelyRemoveFirstCat = () => cats.shift()
const destructivelyRemoveLastCat = () => cats.pop()


//non-destructive
const appendCat= name =>  [...cats, name]
const prependCat= name => [name, ...cats]
const removeFirstCat = () => cats.splice(1)
const removeLastCat = () => cats.splice(0, cats.length - 1)