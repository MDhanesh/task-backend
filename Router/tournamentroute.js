const express = require("express");
const tournamentModule = require("../Models/tournamentModule");
const router = express.Router();

router.get("/get", tournamentModule.getData);
router.put("/edit/:id", tournamentModule.editData);
router.post("/create", tournamentModule.createData);
router.delete("/delete/:id", tournamentModule.deleteData);

module.exports = router;
