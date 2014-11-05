var c = require('chalk');
var pad = require('pad-component');

module.exports = function(name, args, type){
  var out = '';
  var obj;
  if (typeof args[args.length - 1] == 'function') args.pop();
  if (isPlainObj(args[args.length - 1])) obj = args.pop();

  out += name + '(' + args.join(', ') + ')';
  if (type) out += c.gray(' -> ' + type);

  var keys = obj && Object.keys(obj);
  if (obj && keys.length) {
    var max = 0;
    for (var i = 0; i < keys.length; i++) {
      if (keys[i].length > max) max = keys[i].length;
    }

    var lines = [];
    for (var i = 0; i < keys.length; i++) {
      lines.push('  ' + c.green(pad.left(keys[i], max)) + ' ' + obj[keys[i]]);
    }
    out += '\n' + lines.join('\n');
  }

  return out;
}

function isPlainObj(obj){
  return typeof obj == 'object'
    && !Buffer.isBuffer(obj);
}

