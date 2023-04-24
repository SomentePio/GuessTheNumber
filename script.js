let result = prompt(`Guess the Number. It's between 0 and 10.`)
// const match = Math.round(Math.random() * 10)
const randomNumber = Math.round(Math.random() * 10)
// const match = Number(result) != randomNumber

console.log(result, randomNumber)

let Attempts = 1;

while(Number(result) != randomNumber) {
  result = prompt('Try again!')
  Attempts++
}

alert(`You got it in ${Attempts} Attempts! 🎉🎉🎉`)