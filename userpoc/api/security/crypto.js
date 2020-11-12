/** Copyright (c) 2020 - Present, Wissen Technology**/
const crypto = require('crypto');

const ENCRYPTION_KEY = "bf3c199c2470cb477d907b1e0917c17b"; 
const IV = "5183666c72eec9e4"; 

function cipherText(text, encrypt = true) {
  if (text || text === 0) {
    const textToEncrypt = text.toString();
    const encoding = encrypt ? ['utf8', 'hex'] : ['hex', 'utf8'];
    const algorithm = 'aes256';
    const cipher = crypto[encrypt ? "createCipheriv" : "createDecipheriv"](algorithm, ENCRYPTION_KEY, IV);
    return cipher.update(textToEncrypt, ...encoding) + cipher.final(encoding[1]);
  }
  return text;
}

exports.encrypt = (text) => cipherText(text);

exports.decrypt = (text) => cipherText(text, false);