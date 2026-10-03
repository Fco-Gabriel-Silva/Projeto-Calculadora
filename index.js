import { Calculadora } from "./modules/calculadora.js";
import { formatarDigitos } from "./utils/formatarDigitos.js";

const valoresDigitados = ["1", "+", "2", "+", "3", "+", "4", "="];

const expressaoFormatada = formatarDigitos(valoresDigitados);
// console.log(expressaoFormatada);

const calculadora = new Calculadora();

const resultado = calculadora.calcular(expressaoFormatada);

console.log(resultado);
