var http = require("http");

let usuarioActivado;

function validarUsuario(_stautsUsuario) {
  if (_stautsUsuario) {
    console.log("Usuario OK");
  } else {
    console.error("Usuario no autenticado");
  }
}

http
  .createServer(function(req, res) {
    validarUsuario(usuarioActivado);
    res.write("sitio web");
    res.end();
  })
  .listen(3000);
