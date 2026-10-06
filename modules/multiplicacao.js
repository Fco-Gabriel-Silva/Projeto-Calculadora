import { Operacao } from "./operacao.js";

export class Multiplicacao extends Operacao {
  executar() {
    const multiplicacao = this.valor1 * this.valor2;
    return multiplicacao;
  }
}
