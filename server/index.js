// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const { getCodeController } = require("./controllers/get-code-controller");
const { getCompanyController, getCompaniesController } = require("./controllers/get-company-controller");

app.use(express.json());
app.use(cors());

const PORT = 8080;

app.get("/", getCodeController);
app.get("/companies", getCompaniesController);
app.get("/company/:id", getCompanyController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
