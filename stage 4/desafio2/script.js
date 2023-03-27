const students = [
  {
    name: "daniel",
    firstTest:5,
    secondTest:6,
  },

  {
    name: "carlos",
    firstTest:9,
    secondTest:4,
  },

  {
    name: "osmar",
    firstTest:10,
    secondTest:6,
  },

  {
    name: "pedro",
    firstTest:5,
    secondTest:9,
  },

  {
    name: "joão",
    firstTest:5,
    secondTest:7,
  }
]

const average = (students)=>{
  for (const student of students) {
    const average = (student.firstTest + student.secondTest)/2

    if(average >= 7){
      alert(`A média do(a) student(a) ${student.name} é: ${average}\nParabéns ${student.name}, você foi aprovado no concurso! 
      `)
    }else{
      alert(`A média do(a) student(a) ${student.name} é: ${average}\nNão foi dessa vez ${student.name}, tente novamente! 
      `)
    }
  }
}

average(students)