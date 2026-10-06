export class UiController {
  calculadora;
  valoresDigitados;
  input;
  section;

  constructor(calculadora) {
    this.calculadora = calculadora;
    this.valoresDigitados = [];
    this.input = document.querySelector("section.visor input");
    this.section = document.querySelector("section.teclas");
  }

  atualizarVisor() {
    console.log(this.valoresDigitados);
    const digitosFormatados = this.valoresDigitados.join("") || "0";
    this.input.value = digitosFormatados;
  }

  tratarClique(valor) {
    if (valor === "=") {
      const resultado = this.calculadora.calcular(this.valoresDigitados);
      this.valoresDigitados = [resultado];
      return;
    }
    if (valor === "C") {
      this.valoresDigitados = [];
      return;
    }
    if (valor === "DEL") {
      this.valoresDigitados.pop();
      return;
    }

    this.valoresDigitados.push(valor);
    this.valoresDigitados;
    return;
  }

  iniciar() {
    this.section.addEventListener("click", (e) => {
      if (e.target.classList.contains("tecla")) {
        const valor = e.target.innerText;

        this.tratarClique(valor);
        this.atualizarVisor();
      }
    });
  }
}
