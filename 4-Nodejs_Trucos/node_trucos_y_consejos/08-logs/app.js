const logger = require("pino")();

let usuarios = [];
function creaUsuario(ID) {
  if (ID > 20) {
    let usuario = {};
    usuario.userid = ID;
    usuario.nombre = Math.random()
      .toString(36)
      .substring(7);

    usuarios.push(usuario);

    const monitorUsuario = logger.child(usuario);

    monitorUsuario.info("NUEVO USUARIO");
  } else {
    logger.error("ERROR USUARIO", { _id: ID });
  }
}

for (let i = 0; i < 1000; i++) {
  creaUsuario(i);
}
