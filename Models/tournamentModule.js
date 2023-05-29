const tournamentModel = require("../Schema/tournamentmodel");
//
//get
//
module.exports.getData = async (req, res) => {
  try {
    const getinfo = await tournamentModel.find({});
    return res.status(200).send(getinfo);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "error" });
  }
};

//
//create
//

module.exports.createData = async (req, res) => {
  try {
    const createData = await new tournamentModel({
      gamename: req.body.gamename,
      startdate: req.body.startdate,
      enddate: req.body.enddate,
      gameStatus: req.body.gamestatus,
    });
    await createData.save();
    return res.status(200).send(createData);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "error" });
  }
};
//
//edit

module.exports.editData = async (req, res) => {
  let id = req.params.id;

  try {
    let editinfo = await tournamentModel.updateOne(
      { _id: id },
      {
        gamename: req.body.gamename,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        gameStatus: req.body.gamestatus,
      }
    );

    if (!editinfo) {
      return res.status(500).json({ message: "Unable To edit" });
    }

    return res.status(200).send(editinfo);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "error" });
  }
};
//
//delete
//
module.exports.deleteData = async (req, res) => {
  try {
    const deletedata = await tournamentModel.deleteOne({ _id: req.params.id });
    res.status(200).send(deletedata);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "error" });
  }
};
