var crypto = require('crypto');

var encrypted = crypto.createHmac('sha256', 'myPass');
console.log(encrypted.digest('hex'));