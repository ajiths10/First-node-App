const path = require('path');

module.exports = path.dirname(process.mainModule.filename);

//also write this way
//module.exports = path.dirname(require.main.filename);