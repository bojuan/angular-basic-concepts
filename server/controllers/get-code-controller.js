const { generateCode } = require("../generate-code");
const { delay } = require("../utils/delay");

const fs = require("fs").promises;

const getCodeController = async (req, res) => {
  const dataText = await fs.readFile("./db.json", "utf8");

  const data = JSON.parse(dataText);

  const code = generateCode();

  data.codes.push(code);

  await fs.writeFile("./db.json", JSON.stringify(data, null, 2));

  await delay(3000);
  res.json({ code });
};

const validateCodeController = async (req, res) => {
  const code = req.params.code;
  if (!code) {
    return res.status(404).json({ message: "Code not found" });
  }

  const dataText = await fs.readFile("./db.json", "utf8");

  const data = JSON.parse(dataText);

  const codeFound = data.codes.find((item) => code === item);
  if (!codeFound) {
    return res.status(404).json({ message: "Code not found" });
  }

  await delay(3000);
  res.json(true);
};

module.exports = {
  getCodeController,
  validateCodeController
};
