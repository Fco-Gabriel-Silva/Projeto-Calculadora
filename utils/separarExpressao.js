export const separarExpressao = (valores) => {
  if (valores.includes("*")) {
    const indexMultiplicacao = valores.indexOf("*");
    const indexInicio = indexMultiplicacao - 1;
    const indexFim = indexMultiplicacao + 2;
    const expressao = valores.slice(indexInicio, indexFim);
    return { expressao, indexInicio, indexFim };
  }

  if (valores.includes("/")) {
    const indexDivisao = valores.indexOf("/");
    const indexInicio = indexDivisao - 1;
    const indexFim = indexDivisao + 2;
    const expressao = valores.slice(indexInicio, indexFim);
    return { expressao, indexInicio, indexFim };
  }

  if (valores.includes("+")) {
    const indexSoma = valores.indexOf("+");
    const indexInicio = indexSoma - 1;
    const indexFim = indexSoma + 2;
    const expressao = valores.slice(indexInicio, indexFim);
    return { expressao, indexInicio, indexFim };
  }

  if (valores.includes("-")) {
    const indexSubtracao = valores.indexOf("-");
    const indexInicio = indexSubtracao - 1;
    const indexFim = indexSubtracao + 2;
    const expressao = valores.slice(indexInicio, indexFim);
    return { expressao, indexInicio, indexFim };
  }
};
