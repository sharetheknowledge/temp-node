const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//methode returns the system uptime in seconds

console.log(`The sytem uptime is ${os.uptime()} seconds`);

console.log(os.uptime() / 3600);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
