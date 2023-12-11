const express = require("express");

const app = express();

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
  console.log(`server is listening to ${PORT}`);
});
