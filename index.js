
require('dotenv').config();
require('module-alias/register');//Needed for @ in path
const  path = require('path');
//Init Startup Debuger

const debugStartUp = require('debug')('app:startup');

//Init Express App
const express = require('express');
const req = require('express/lib/request');
const app = express();
const bodyParser = require('body-parser')
//Init Startup Error Logger
require('@startup/errorLog.start')(process);


const expressLayouts = require('express-ejs-layouts');

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './app/views'));
app.use(expressLayouts);
app.set('layout', 'layouts/layout')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))


app.use(express.static(path.join(__dirname,'public')))
app.use('/css', express.static("src"))
//Init all Databases Here

// const db_client = require('@helpers/db.connect')

// require('@databases/createUser.js')(db_client);
// require('@databases/createSession.js')(db_client);




//Simulate an Uncaught Error code
//throw new Error('Thrown Error');

//Simulate an Unhandled Error code
// const p = Promise.reject(new Error('Thrown Rejected Promise Error'));
// p.then(()=> console.log('done'));





//All Routes //./app/routes/
require('@routes/web.routes')(app);
require('@routes/app.routes')(app);



app.get('*', function(req, res){
  res.status(404).render('404.err.ejs');
});
//Define Important Const / Var / Let
const port = process.env.PORT || 3000;
//App Listen Code
// const hostname = '192.168.1.4'
app.listen(port, () => {
  debugStartUp(`Node app Started`);
  console.log(`Node app listening on port ${port}`);
})