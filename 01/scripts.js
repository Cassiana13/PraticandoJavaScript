//1. Declare uma variável nome weight

let weight;

//2. Que tipo de dado é a variável acima?

console.log(typeof weight);

/*3. Declare uma variável e atribua valores para cada um dos dados:
   
      * name: String
      * age: Number (Interger)
      * stars: Number (float)
      * isSubscribed: Boolean
*/

/*let name = "Maria";
let age = 20;
let stars = 30.2;
let isSubscribed = true;

/* 
4. A variável student abaixo é de que tipo de dado?
4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.
4.2 MOstre no console a seguinte mensagem
   <name> de idade <age> pesa <weight> kg
   Atenção, substitua <name> <age> e <weigth> pelos valores
   de cada propriedade do objeto
 */
let student = {
  name: "Maria",
  age: 30,
  weight: 65.6,
};
/*
console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight} kg`
);*/

/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor,
ou seja, somente o array vazio

let students = [];

/* Reatribua valor para a variável acima, colocando dentro dela o objeto studnt
da questão. (Não copiar e coloar o objeto, mas usar o objeto criado e inserir ele no Array) 
 */
let students = [student];
console.log(students);
/*
7. Coloque no console o valor da posição zero do Array acima*/

console.log(students[0]);

/* 8. Crie um novo student e coloque na posição 1 do Array students*/

const john = {
  name: "John",
  age: 23,
  weight: 74.8,
};

students = {
  student,
  john,
};

students[1] = john;
console.log(students);

/*Sem rodar o código responda qual é a resposta do código abaixo e porque?
Após sua resposta, rode o código e veja se você acertou*/

console.log(a);

var a = 1;
