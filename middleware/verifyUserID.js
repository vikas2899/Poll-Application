const Poll = require("../models/Poll");

const verifyUserID = async (req, res, next) => {
  try {
    const userId = req.body.userId;
    const pollId = req.params.id;
    const pollData = await Poll.findOne({ _id: pollId });
    const pollResponses = pollData.pollResponses;
    const isPresent = pollResponses.some((d) => d.userId === userId);
    if (isPresent) {
      res.status(401).json("User already responded");
      next("User already responded");
    } else {
      next();
    }
  } catch (e) {
    console.log("verifyUserId: " + e);
    res.status(500).json(e);
    next();
  }
};

module.exports = verifyUserID;
