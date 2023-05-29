const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const DB = require("./connect");
const tournament = require("./Router/tournamentroute");
const participant = require("./Router/participantroute");
dotenv.config();

dotenv.config();
DB();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/tournament", tournament);
app.use("/participant", participant);

app.listen(process.env.PORT || 5000);
