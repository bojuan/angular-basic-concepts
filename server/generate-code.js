function generateCode() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  let code = "";

  for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) {
      const randomLetter = letters.charAt(
        Math.floor(Math.random() * letters.length)
      );
      code += randomLetter;
    } else {
      const randomNumber = numbers.charAt(
        Math.floor(Math.random() * numbers.length)
      );
      code += randomNumber;
    }
  }

  code += "-";

  const lastRandomNumber = numbers.charAt(
    Math.floor(Math.random() * numbers.length)
  );
  code += lastRandomNumber;

  return code;
}

module.exports = {
  generateCode,
};
