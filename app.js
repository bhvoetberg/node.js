const os = require('os')

//Info current user
const user = os.userInfo()

console.log(user);

//system uptime (s)
console.log(os.uptime());

const currentOS = {
    name:os.type(),
    release:os.release(),
    freeMem:os.freemem()/1024/1024,
}

console.log(currentOS);




















// const amount = 9
// if (amount < 10) {
//     console.log('small number');
// } 
// else {
//     console.log('large number');
// }

// console.log('first node app');



// const names = require('./4-names')
// const sayHo = require('./5-utils')
// const data = require('./6-alternative-flavour')
// require('./7-mind-grenade')