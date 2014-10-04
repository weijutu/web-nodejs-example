var os = require('os');

console.log("tmpdir：" + os.tmpdir());
console.log("endianness" + os.endianness());
console.log("hostname：" + os.hostname());
console.log("type：" + os.type());
console.log("platform：" + os.platform());
console.log("arch：" + os.arch());
console.log("release：" + os.release());
console.log("uptime：" + os.uptime());
console.log("loadavg：" + os.loadavg());
console.log("totalmem：" + os.totalmem());
console.log("freemem：" + os.freemem());
console.log(os.cpus());
console.log(os.networkInterfaces());