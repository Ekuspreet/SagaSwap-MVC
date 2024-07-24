const express = require('express');

const viewErrorsMiddleware = require('@middlewares/viewErrors.middleware');

const baseController = require('@controllers/app/base.controller');
const testController = require('@controllers/app/test.controller');
const test2Controller = require('@controllers/app/test2.controller');
const registrationController = require('@controllers/app/registration.controller.js')
const anonymousController = require('@controllers/app/anonymousLogin.controller.js')
const authenticatedController = require('@controllers/app/authenticatedLogin.controller.js') 
const userController = require('@controllers/app/user.controller.js')
module.exports = function(app){
 app.use(express.json());
 app.use('/admin/', baseController)  
 app.use('/admin/test', testController)  
 app.use('/admin/test2', test2Controller)  
 app.use('/api/register', registrationController )
app.use('/api/login/anonymous', anonymousController )
app.use('/api/login/authenticated', authenticatedController )
app.use('/api/user', userController)
  //Log all thrown errors
  app.use(viewErrorsMiddleware);

}