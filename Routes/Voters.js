const express = require("express");
const { Router } = require(express)
const votersRouter = Router()
const voters = require("../controllers/voters");

votersRouter.post("/", voters.createVotersFunc);
votersRouter.get("/:positionId", voters.getVotersByPositionId);
votersRouter.get("/:id", voters.getSingleVotersFunc);
votersRouter.delete("/", voters.removeVotersById);
votersRoute.patch('/', voters.updateVoters);
module.exports = votersRouter