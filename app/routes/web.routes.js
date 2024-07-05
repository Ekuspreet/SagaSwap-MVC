const express = require('express');

const baseController = require('@controllers/web/base.controller');
const apiErrorsMiddleware = require('@middlewares/apiErrors.middleware');
const homepageController = require('@controllers/web/homepage.controller');
const registerpageController = require('@controllers/web/registerpage.controller');
module.exports = function(app){


 app.use(express.json());

 //All Routes to Controller

app.use('/', homepageController);
app.use('/register', registerpageController);
 //Log all API trown errors
 app.use(apiErrorsMiddleware);

}