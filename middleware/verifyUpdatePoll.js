const Poll = require("../models/Poll");

const verifyUpdatePoll = async (req, res, next) => {
  try {
    const createdBy = req.body.createdBy;
    const currentUserId = req.body.currentUser;
    if (createdBy !== currentUserId) {
      res.status(401).json("Operation Not Allowed");
      next("Operation Not Allowed");
    } else {
      next();
    }
  } catch (e) {
    res.status(500).json(e);
    next();
  }
};

module.exports = verifyUpdatePoll;
