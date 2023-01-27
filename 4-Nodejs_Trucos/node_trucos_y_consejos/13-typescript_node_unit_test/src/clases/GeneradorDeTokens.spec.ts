import { GeneradorDeTokens } from "./GeneradorDeTokens";

describe("Generar Tokens", () => {
  test("tokens correctos", () => {
    expect(GeneradorDeTokens.crearToken().length).toBeGreaterThan(8);
  });
});
