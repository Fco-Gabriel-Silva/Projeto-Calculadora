export class Operacao {
  valor1;
  valor2;

  constructor(expressao) {
    this.valor1 = expressao[0];
    this.valor2 = expressao[2];
  }

  executar() {}
}
