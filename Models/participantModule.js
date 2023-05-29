const participantModel = require("../Schema/participantmodel");
//
//get
//
exports.getparticipant = async (req, res) => {
  try {
    const getinfo = await participantModel.find({});
    return res.status(200).send(getinfo);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "error" });
  }
};
//
//create
//

exports.createParticipant = async (req, res) => {
  let { participantname, age, gender, tournamentid } = req.body;
  try {
    const createData = await new participantModel({
      participantname,
      age,
      gender,
      tournamentid,
    });
    await createData.save();
    return res.status(200).send(createData);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "error here" });
  }
};

//
//edit
//

exports.editParticipant = async (req, res) => {
  let { participantname, age, gender, tournamentid } = req.body;
  let id = req.params.id;
  try {
    let editinfo = await participantModel.updateOne(
      { _id: id },
      {
        participantname,
        age,
        gender,
        tournamentid,
      }
    );

    if (!editinfo) {
      return res.status(500).json({ message: "Unable To Edit" });
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

exports.deleteParticipant = async (req, res) => {
  let id = req.params.id;
  try {
    const deletedata = await participantModel.deleteOne({ _id: req.params.id });
    res.status(200).send(deletedata);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "error" });
  }
};
