export const separarExpressao = (valores) => {
  const indexMultiplicacao =
    valores.indexOf("*") !== -1 ? valores.indexOf("*") : Infinity;
  const indexDivisao =
    valores.indexOf("/") !== -1 ? valores.indexOf("/") : Infinity;
  const indexSoma =
    valores.indexOf("+") !== -1 ? valores.indexOf("+") : Infinity;
  const indexSubtracao =
    valores.indexOf("-") !== -1 ? valores.indexOf("-") : Infinity;

  let indexOriginal;

  if (indexMultiplicacao !== Infinity || indexDivisao !== Infinity) {
    indexOriginal = Math.min(indexMultiplicacao, indexDivisao);
  } else if (indexSoma !== Infinity || indexSubtracao !== Infinity) {
    indexOriginal = Math.min(indexSoma, indexSubtracao);
  }

  const indexInicio = indexOriginal - 1;
  const indexFim = indexOriginal + 2;
  const expressao = valores.slice(indexInicio, indexFim);
  return { expressao, operacao: expressao[1], indexInicio, indexFim };
};
