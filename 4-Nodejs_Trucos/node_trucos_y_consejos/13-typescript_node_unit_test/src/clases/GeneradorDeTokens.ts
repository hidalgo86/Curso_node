export class GeneradorDeTokens {
  static crearToken() {
    return Math.random()
      .toString(11)
      .substring(7);
  }
}
