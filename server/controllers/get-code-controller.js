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

module.exports = {
  getCodeController,
};
