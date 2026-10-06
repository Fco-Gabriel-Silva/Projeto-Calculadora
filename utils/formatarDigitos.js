import { operacoes } from "../constants/operacoes.js";

export const formatarDigitos = (valoresDigitados) => {
  const valoresFormatados = [];

  let valorAntigo = "";

  valoresDigitados.forEach((e) => {
    if (operacoes.includes(e)) {
      if (valorAntigo) valoresFormatados.push(valorAntigo);
      valorAntigo = "";
      valoresFormatados.push(e);
    } else {
      valorAntigo += e;
    }
  });

  if (valorAntigo) {
    valoresFormatados.push(valorAntigo);
  }

  return valoresFormatados;
};
