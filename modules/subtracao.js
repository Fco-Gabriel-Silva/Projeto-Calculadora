import { Operacao } from "./operacao.js";

export class Subtracao extends Operacao {
  executar() {
    const subtracao = this.valor1 + this.valor2;
    return subtracao;
  }
}
