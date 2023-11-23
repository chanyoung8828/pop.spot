const { Schema, SchemaTypes } = require("mongoose");

const waitingSchema = new Schema([
  {
    date: Date,
    people: Number,
    // waiting_queue: Array,
    popup_store: {
      type: SchemaTypes.ObjectId,
      ref: "PopupStore",
    },
    user: {
      type: SchemaTypes.ObjectId,
      ref: "User",
    },

    complete_waiting: {
      type: Boolean,
      default: false,
    },
  },
]);

module.exports = waitingSchema;
