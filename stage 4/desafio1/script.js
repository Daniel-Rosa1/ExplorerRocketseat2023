
let numberOne = Number(prompt("digite o primeiro numero"))
let numberTwo = Number(prompt("digite o segungo numero"))
const operators = [
  {
    operator: "+",
    message: 'A soma dos dois números é:'
  },

  {
    operator: "-",
    message: 'A subtração dos dois números é:'
  },

  {
    operator: "*",
    message: 'A multiplicação dos dois números é:'
  },

  {
    operator: "/",
    message: 'A divisão dos dois números é:'
  },

  {
    operator: "%",
    message: 'O resto da divisão dos dois números é:'
  }
]

const total = (operators, numberOne, numberTwo) =>{
  const equalNumbers = numberOne === numberTwo
  const oddNumber = (numberOne + numberTwo)%2 !== 0

  for (let operator of operators) {
    let calc = eval(`${numberOne} ${operator.operator} ${numberTwo}`)
    alert( `${operator.message} ${calc}`)
  } 

  if(oddNumber){
    alert(` a soma de ${numberOne} e ${numberTwo} resulta em um numero impar`)
  }else{
    alert(` a soma de ${numberOne} e ${numberTwo} resulta em um numero par`)
  }

  if(equalNumbers){
    alert(`O número ${numberOne} e o ${numberTwo} são iguais`)
  }
}

total(operators, numberOne, numberTwo)

