var moment = require('moment');

console.log(moment().format());
console.log(moment().unix());

console.log(moment.unix(1).format('Y'));

console.log(moment().format('MMMM Do, YYYY @ HH:mm A'));