const mongoose = require("mongoose");

const PollSchema = new mongoose.Schema(
  {
    ask: { type: String, required: true },
    opt1: {
      value: {
        type: String,
        required: true,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
    opt2: {
      value: {
        type: String,
        required: true,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
    opt3: {
      value: {
        type: String,
        default: "",
      },
      count: {
        type: Number,
        default: 0,
      },
    },
    opt4: {
      value: {
        type: String,
        default: "",
      },
      count: {
        type: Number,
        default: 0,
      },
    },
    createdBy: {
      type: String,
      required: true,
    },
    visibility: {
      type: String,
      default: "public",
    },
    code: {
      type: String,
      default: "",
    },
    expiresOn: {
      type: Number,
      default: 24,
    },
    active: {
      type: Boolean,
      default: true,
    },
    pollResponses: {
      type: Array,
      default: [],
      unique: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Poll", PollSchema);
