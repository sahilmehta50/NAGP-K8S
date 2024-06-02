// cpu-load.js
const crypto = require('crypto');

console.log('Starting CPU load simulation...');

while (true) {
  crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
}