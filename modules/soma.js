import { Operacao } from "./operacao.js";

export class Soma extends Operacao {
  executar() {
    const soma = this.valor1 + this.valor2;
    return soma;
  }
}
