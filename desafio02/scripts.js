const students = [
  {
    name: "Maria",
    n1: 6.3,
    n2: 9,
  },
  {
    name: "João",
    n1: 10,
    n2: 9,
  },
  {
    name: "John",
    n1: 3.3,
    n2: 2.5,
  },
  {
    name: "Marisa",
    n1: 1.2,
    n2: 3,
  },
];

function aluno(student) {
  let average = `${(student.n1 + student.n2) / 2}`;

  if (average >= 7) {
    return `A média do(a) aluno(a) ${student.name} é: ${average}.
     Parabéns, ${student.name}! Você foi aprovado(a)!!
    `;
  } else;
  return `A media do(a) aluno(a) ${student.name} é: ${average}.
     Não foi dessa vez, ${student.name}! Tente novamente!!`;
}

for (let student of students) {
  alert(aluno(student));
}

alert("Essas foram as notas dos estudantes.");
