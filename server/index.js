// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const { getCodeController } = require("./controllers/get-code-controller");

app.use(express.json());
app.use(cors());

const PORT = 8080;

app.get("/", getCodeController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
