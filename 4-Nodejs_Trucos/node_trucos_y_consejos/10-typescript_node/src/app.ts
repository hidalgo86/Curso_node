import * as http from "http";

http
  .createServer((req, res) => {
    res.write("OK");
    res.end();
  })
  .listen(3000);
