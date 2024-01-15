/*- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;*/

alert("Insira dois números para seguir com os cálculos.");

let firstNumber = prompt("Digite o primerio número: ");
let secondNumber = prompt("Digite o segundo número: ");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

/**Cálculos dos números */
const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = (firstNumber / secondNumber).toFixed(2);
const restDiv = (firstNumber % secondNumber).toFixed(2);

alert("Soma: " + sum);
alert("Subtração: " + sub);
alert("Multiplicação: " + multi);
alert("Divisão: " + div);
alert("Resto da divisão: " + restDiv);

/**Comparação ímpar ou par */
if (sum & 1) {
  alert("Este número é ímpar: " + sum);
} else {
  alert("Este número é par: " + sum);
}

/**Comparação de números - igual ou diferente */

if (firstNumber == secondNumber) {
  alert("Os números inseridos são iguais.");
} else {
  alert("Os números inseridos são diferentes.");
}

alert("Bye-Bye");
