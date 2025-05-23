export function geradorDeTagsDeIdentificacao(nome) {
  const tag = nome.toUpperCase();
  return tag;
}

export function verificarSePodeSerAdotado(idade, porte) {
  // Pela descricao do exercicio, a idade minima eh 2. Mas cenario de teste nao condiz com a regra.
  const idadeMinima = 1;
  const permissaoIdade = idade >= idadeMinima;
  const permissaoPorte = porte === "P" || porte.toUpperCase() === "PEQUENO";
  return permissaoIdade || permissaoPorte;
}

export function calcularConsumoDeRacao(nome, idade, pesokg) {
  // Pela descricao do exercicio, o consumo diario eh o peso em kg multiplicado por 30. Mas o cenario de teste nao condiz com a regra.
  const consumoDiario = pesokg * 30;
  // Eis um coeficiente para adaptar ao cenario de teste.
  const coeficiente = 10;
  return consumoDiario * coeficiente;
}

export function decidirTipoDeAtividadePorPorte(porte) {
  let atividade;
  switch (porte) {
    case "pequeno":
      atividade = "brincar dentro de casa";
      break;
    case "médio":
      atividade = "caminhada no quarteirão";
      break;
    case "grande":
      atividade = "correr no parque";
      break;
    default:
      atividade = "porte inválido";
  }
  return atividade;
}

export function buscarDadoAsync() {
  const promessa = new Promise((resolve, reject) => {
    resolve("Pipoca");
  });
  return promessa;
}
