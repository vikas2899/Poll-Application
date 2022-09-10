const router = require("express").Router();
const verifyUserID = require("../middleware/verifyUserID");
const verifyUpdatePoll = require("../middleware/verifyUpdatePoll");
const Poll = require("../models/Poll");

// @ Poll Create route

router.post("/create", async (req, res) => {
  const newPoll = new Poll({
    ask: req.body.ask,
    opt1: req.body.opt1,
    opt2: req.body.opt2,
    opt3: req.body.opt3,
    opt4: req.body.opt4,
    createdBy: req.body.createdBy,
    visibility: req.body.visibility,
    code: req.body.code,
    expiresOn: req.body.expiresOn,
  });

  // Save to database
  try {
    const savedPoll = await newPoll.save();
    res.status(201).json(savedPoll);
  } catch (err) {
    res.status(500).json(err);
  }
});

// @ Poll View route

router.post("/view", async (req, res) => {
  const sortTime = req.body.sortTime;
  const sortVisibility = req.body.sortVisibility;
  const sortActive = req.body.sortActive;
  const sortCreatedBy = req.body.sortCreatedBy;
  const sortOrder = { createdAt: sortTime === "asc" ? 1 : -1 };

  let searchParams = {};
  if (sortCreatedBy) {
    searchParams = {
      visibility: sortVisibility,
      active: sortActive,
      createdBy: sortCreatedBy,
    };
  } else {
    searchParams = {
      visibility: sortVisibility,
      active: sortActive,
    };
  }

  try {
    const pollData = await Poll.find(searchParams).sort(sortOrder);
    res.status(200).json(pollData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", verifyUserID, async (req, res) => {
  const data = {
    userId: req.body.userId,
    response: req.body.response,
  };
  const opt = req.body.response;
  let update = {};
  if (opt === "opt1") {
    update = {
      $inc: {
        "opt1.count": 1,
      },
    };
  } else if (opt === "opt2") {
    update = {
      $inc: {
        "opt2.count": 1,
      },
    };
  } else if (opt === "opt3") {
    update = {
      $inc: {
        "opt3.count": 1,
      },
    };
  } else if (opt === "opt4") {
    update = {
      $inc: {
        "opt4.count": 1,
      },
    };
  }
  try {
    const updatedPoll = await Poll.findByIdAndUpdate(
      req.params.id,
      {
        $push: { pollResponses: data },
        ...update,
      },
      { new: true }
    );
    res.status(200).json(updatedPoll);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id/inactive", verifyUpdatePoll, async (req, res) => {
  const pollID = req.params.id;
  try {
    const updatedPoll = await Poll.findByIdAndUpdate(
      pollID,
      {
        $set: {
          active: false,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedPoll);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
