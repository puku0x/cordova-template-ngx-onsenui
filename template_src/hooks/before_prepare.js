const fs = require('fs');
const execSync = require('child_process').execSync;

module.exports = function(context) {
  console.log('Building application...');
  console.log(execSync("npm run build").toString('utf8'));
};
