"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.
const readlineSync = __importStar(require("readline-sync"));
function main() {
    let num1Str = readlineSync.question('Introduce el primer numero: ');
    let num2Str = readlineSync.question('Introduce el segundo numero: ');
    let parsedNum1 = parseFloat(num1Str);
    let parsedNum2 = parseFloat(num2Str);
    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
        console.log('Heyy, introduce nummeros validos.');
    }
    else {
        if (parsedNum1 > parsedNum2) {
            let suma = parsedNum1 + parsedNum2;
            let diferencia = parsedNum1 - parsedNum2;
            console.log(`La suma es: ${suma}`);
            console.log(`La diferencia es: ${diferencia}`);
        }
        else {
            let producto = parsedNum1 * parsedNum2;
            let division = parsedNum1 / parsedNum2;
            console.log(`El producto es: ${producto}`);
            console.log(`La división es: ${division}`);
        }
    }
}
main();
