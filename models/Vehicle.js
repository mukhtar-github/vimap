import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema({
  make: {
    type: String,
    required: [true, "Please provide vehicle make"],
    maxlength: 50,
  },
});
