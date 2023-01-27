var base = 10;

function multiplica(valor1, valor2) {
  resultado = valor1 * valor2;

  return `el total es ${resultado}`;
}
debugger;
for (let a = 0; a < 5; a++) {
  console.log(multiplica(10, base));
  base += 10;
}
