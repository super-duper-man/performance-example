const express = require("express");
const cluster = require("cluster");

const app = express();

const PORT = process.env.PORT || 3300;

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    //Event loop is blocked
  }
}

app.get("/", (req, res) => {
  res.send(`Performance Example ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(
    `event loop was block for 9 seconds and now process id is: ${process.pid}`
  );
});

if (cluster.isMaster) {
  console.log("Master has been started...");
  cluster.fork();
  cluster.fork();
} else {
  console.log("Worker process started.");
  app.listen(PORT, () => {
    console.log(`server is listening to ${PORT}`);
  });
}
