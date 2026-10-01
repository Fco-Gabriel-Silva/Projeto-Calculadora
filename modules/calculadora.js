export class Calculadora {
  valor1;
  valor2;
  operacao;

  somar() {
    const soma = this.valor1 + this.valor2;
    return soma;
  }

  subtrair() {
    const subtracao = this.valor1 - this.valor2;
    return subtracao;
  }

  multiplicar() {
    const multiplicacao = this.valor1 * this.valor2;
    return multiplicacao;
  }

  dividir() {
    const divisao = this.valor1 / this.valor2;
    return divisao;
  }
}
