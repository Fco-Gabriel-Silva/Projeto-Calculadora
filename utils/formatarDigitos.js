import { operacoes } from "../constants/operacoes.js";

export const formatarDigitos = (valoresDigitados) => {
  const valoresFormatados = [];

  let valorAntigo = "";

  valoresDigitados.forEach((e) => {
    if (e === "=" && valorAntigo) {
      valoresFormatados.push(Number(valorAntigo));
      return;
    }

    if (operacoes.includes(e)) {
      valoresFormatados.push(Number(valorAntigo));
      valorAntigo = "";
      valoresFormatados.push(e);
    } else {
      valorAntigo += e;
    }
  });

  return valoresFormatados;
};
