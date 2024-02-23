// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const {
  getCodeController,
  validateCodeController,
} = require("./controllers/get-code-controller");
const {
  getCompanyController,
  getCompaniesController,
  deleteCompanyController,
  createCompanyController,
} = require("./controllers/get-company-controller");

app.use(express.json());
app.use(cors());

const PORT = 8080;

app.get("/code", getCodeController);
app.get("/validate-code/:code", validateCodeController);

app.get("/companies", getCompaniesController);

app.get("/company/:id", getCompanyController);

app.delete("/company/:id", deleteCompanyController);
app.post("/company", createCompanyController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
