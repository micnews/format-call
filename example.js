var format = require('./');

console.log();
console.log(format('console.log', ['foo', 'bar']));
console.log();

console.log(format('foo', ['bar', { beep: 'boop', me: 'ow' }], 'stream'));
console.log();

console.log(format('db.createReadStream', [{
  lt: 'z',
  gt: 'f',
  reverse: true,
  limit: 12,
  keyEncoding: 'utf8',
  valueEncoding: 'json'
}], 'readable'));
console.log();
