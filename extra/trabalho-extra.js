function filtroInteiros(lista) {
  const listaFiltrada = [];
  const regex = /^[0-9]+$/;
  lista.forEach((item) => {
    if (regex.test(item)) {
      listaFiltrada.push(item);
    }
  });
  return listaFiltrada;
}

function contadorDeVogais(texto) {
  let contador = 0;
  const regex = /^[aeiou]$/;
  texto.split("").forEach((item) => {
    if (regex.test(item)) {
      contador++;
    }
  });
  return contador;
}
