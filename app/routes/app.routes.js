const express = require("express");
const viewErrorsMiddleware = require("@middlewares/viewErrors.middleware");
const registrationController = require("@controllers/app/registration.controller.js");
const anonymousController = require("@controllers/app/anonymousLogin.controller.js");
const authenticatedController = require("@controllers/app/authenticatedLogin.controller.js");
const userController = require("@controllers/app/user.controller.js");
const roomController = require("@controllers/app/room.controller.js")
module.exports = function (app) {
  app.use(express.json());
  app.use("/api/register", registrationController);
  app.use("/api/login/anonymous", anonymousController);
  app.use("/api/login/authenticated", authenticatedController);
  app.use("/api/user", userController);
  app.use("/api/room", roomController);
  
  //Log all thrown errors
  app.use(viewErrorsMiddleware);
};
