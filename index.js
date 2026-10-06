import { Calculadora } from "./modules/calculadora.js";
import { UiController } from "./modules/uiController.js";
import { formatarDigitos } from "./utils/formatarDigitos.js";

const valoresDigitados = ["1", "+", "2", "+", "3", "+", "4", "="];

const expressaoFormatada = formatarDigitos(valoresDigitados);
// console.log(expressaoFormatada);

const calculadora = new Calculadora();

new UiController(calculadora).iniciar();
