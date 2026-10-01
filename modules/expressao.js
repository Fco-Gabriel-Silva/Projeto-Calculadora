import { Calculadora } from "./calculadora.js";

export class Expressao extends Calculadora {
  valor1;
  valor2;
  operacao;

  constructor(expressao) {
    super();
    this.valor1 = expressao[0];
    this.valor2 = expressao[2];
    this.operacao = expressao[1];
  }

  executarAcao() {
    switch (this.operacao) {
      case "+":
        return this.somar();
        break;
      case "-":
        return this.subtrair();
        break;
      case "*":
        return this.multiplicar();
        break;
      case "/":
        return this.dividir();
        break;
      default:
        return "Operação Inexistente";
    }
  }
}
