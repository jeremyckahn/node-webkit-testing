var shell = require('shelljs');
var exec = require('child_process').exec;

console.log('pwd: ' + shell.pwd());

exec('say hello', function (error, stdout, stderr) {
  console.log(error, stdout, stderr);
});
