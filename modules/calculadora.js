import { separarExpressao } from "../utils/separarExpressao.js";
import { Divisao } from "./divisao.js";
import { Multiplicacao } from "./multiplicacao.js";
import { Soma } from "./soma.js";
import { Subtracao } from "./subtracao.js";

export class Calculadora {
  calcular(expressao) {
    let solucaoExpressao = [...expressao];

    while (solucaoExpressao.length !== 1) {
      const { expressao, operacao, indexInicio } =
        separarExpressao(solucaoExpressao);

      let resultado;

      switch (operacao) {
        case "*":
          resultado = new Multiplicacao(expressao).executar();
          break;

        case "/":
          resultado = new Divisao(expressao).executar();
          break;

        case "+":
          resultado = new Soma(expressao).executar();
          break;

        case "-":
          resultado = new Subtracao(expressao).executar();
          break;
      }

      solucaoExpressao.splice(indexInicio, 3, resultado);
    }

    return Number(solucaoExpressao);
  }
}
