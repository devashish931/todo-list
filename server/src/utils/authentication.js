const crypto = require("crypto");

const createHash = (password) => {
  return crypto.createHash("sha256").update(password).digest("base64");
};

const compareHash = (password, hash) => {
  return createHash(password) === hash;
};

module.exports = {
  createHash,
  compareHash,
};
