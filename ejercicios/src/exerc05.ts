// Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.
import * as readlineSync from 'readline-sync';

function main() {
  let num1Str = readlineSync.question('Introduce el primer numero: ');
  let num2Str = readlineSync.question('Introduce el segundo numero: ');

  let parsedNum1 = parseFloat(num1Str);
  let parsedNum2 = parseFloat(num2Str);

  if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
    console.log('Heyy, introduce nummeros validos.');
  } else {
    if (parsedNum1 > parsedNum2) {
      let suma = parsedNum1 + parsedNum2;
      let diferencia = parsedNum1 - parsedNum2;
      console.log(`La suma es: ${suma}`);
      console.log(`La diferencia es: ${diferencia}`);
    } else {
      let producto = parsedNum1 * parsedNum2;
      let division = parsedNum1 / parsedNum2;
      console.log(`El producto es: ${producto}`);
      console.log(`La división es: ${division}`);
    }
  }
}

main();
