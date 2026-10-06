export class Operacao {
  valor1;
  valor2;

  constructor(expressao) {
    this.valor1 = Number(expressao[0]);
    this.valor2 = Number(expressao[2]);
  }

  executar() {}
}
