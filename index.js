const express = require("express");
const connection = require("./connection.js");
const locations = require("./locations.js");
const app = express();

const cors = require("cors");

const port = process.env.PORT || 8080;

app.use(cors());

app.use("/locations", locations);

const shutdown = () => {
  console.log("Closing HTTP server");
  server.close(() => {
    console.log("Server closed");
  });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

const server = app.listen(port, () => {
  connection.connect();
  console.log(`Listening on port ${server.address().port}`);
});
