import { Expressao } from "./modules/expressao.js";
import { formatarDigitos } from "./utils/formatarDigitos.js";
import { separarExpressao } from "./utils/separarExpressao.js";

const valoresDigitados = ["1", "+", "2", "*", "3", "+", "4", "="];

const expressaoFormatada = formatarDigitos(valoresDigitados);
console.log(expressaoFormatada);

let solucaoExpressao = [...expressaoFormatada];

while (solucaoExpressao.length !== 1) {
  const { expressao, indexInicio } = separarExpressao(solucaoExpressao);

  const resultado = new Expressao(expressao).executarAcao();
  solucaoExpressao.splice(indexInicio, 3, resultado);
}

console.log(solucaoExpressao);

/* const expressao1 = new Expressao(expressaoFormatada);

console.log(expressao1);
console.log(expressao1.executarAcao()); */
