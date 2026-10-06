import { Operacao } from "./operacao.js";

export class Divisao extends Operacao {
  executar() {
    const divisao = this.valor1 / this.valor2;
    return divisao;
  }
}
