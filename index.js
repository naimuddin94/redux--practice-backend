require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const server = http.createServer(app);
const port = process.env.PORT || 5000;

const main = () => {
  server.listen(port, () => {
    console.log(`server listening on ${port}`);
  });
};

main();