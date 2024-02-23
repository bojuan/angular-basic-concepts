const { generateCode } = require("../generate-code");
const { delay } = require("../utils/delay");
const fs = require("fs").promises;

const getCompaniesController = async (req, res) => {
  const dataText = await fs.readFile("./db.json", "utf8");

  const data = JSON.parse(dataText);

  await delay(3000);
  res.json({ companies: data.companies });
};

const getCompanyController = async (req, res) => {
  const id = req.params.id;
  const dataText = await fs.readFile("./db.json", "utf8");

  const data = JSON.parse(dataText);

  const company = data.companies.find((item) => item.id === Number(id));
  if (!company) {
    return res.status(404).json({ message: "Company not found" });
  }

  await delay(3000);
  res.json({ company });
};

const deleteCompanyController = async (req, res) => {
  const id = req.params.id;

  const dataText = await fs.readFile("./db.json", "utf8");

  const data = JSON.parse(dataText);

  const newCompanies = data.companies.filter((item) => item.id !== Number(id));
  data.companies = newCompanies;

  await fs.writeFile("./db.json", JSON.stringify(data, null, 2));

  await delay(3000);
  res.json(true);
};

const createCompanyController = async (req, res) => {
  const { name, image, year, email } = req.body;

  const dataText = await fs.readFile("./db.json", "utf8");
  
  const data = JSON.parse(dataText);
  const newCompany = { id: data.companies.length, name, image, year, email }
  data.companies.push(newCompany);

  await fs.writeFile("./db.json", JSON.stringify(data, null, 2));

  await delay(3000);
  res.json(newCompany);
};

module.exports = {
  getCompaniesController,
  getCompanyController,
  deleteCompanyController,
  createCompanyController
};
