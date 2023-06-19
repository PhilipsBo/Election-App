const { rouoter } = require("express");
const appRouter = Router();
// const express = require("express");
//const router =const.Router()
//const appRouter=Router();

const candidate = require("./candidate");
const positions = require("positions");
const voters = require("./Voters");

appRouter.use("candidate", candidate);
appRouter.use("positions", positions);
appRouter.use("voters", voters);

module.exports = appRouter;