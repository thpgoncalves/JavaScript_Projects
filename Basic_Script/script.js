/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [X]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [X]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {name: 'Thiago',
   n1: 7,
   n2: 8.3,
  },
  {name: 'Roberto',
   n1: 5,
   n2: 7.7,
  },
  {name: 'Anilton',
   n1: 8,
   n2: 4.4,
  },
  {name: 'João',
   n1: 3,
   n2: 9.3,
  },
  {name: 'Victor',
   n1: 9,
   n2: 8.6,
  }
]

const average = (n1, n2) => {
  return (n1 + n2) / 2
}

for(let student of students) {
  let avg = average(student.n1, student.n2)

  if(avg >= 7) {
    alert(`
    A média do(a) aluno(a) ${student.name} foi de: ${average(student.n1, student.n2)}
    Parabéns ${student.name}! Você foi aprovado(a) no concurso!`)
  } 
  else {
    alert(`
    A média do(a) aluno(a) ${student.name} foi de: ${average(student.n1, student.n2)}
    Não foi dessa vez ${student.name}. Tente novamente no próximo.`)
  }
}