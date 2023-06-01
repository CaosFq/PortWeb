//Modules
const express = require('express');
const app = express();
const router = require('../routes/index');
const path = require('path');

//Settings
app.set('port', 3001);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
//Midlwares
app.use(router);
app.use(express.static(path.join(__dirname, 'public')));
//Server Listening
app.listen(app.get('port'), () => {
  console.log(`Server Runnig on port ${app.get('port')}`);
});
module.exports = app;
