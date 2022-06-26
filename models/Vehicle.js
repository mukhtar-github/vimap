import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema({
  make: {
    type: String,
    required: [true, "Please provide vehicle make"],
    maxlength: 50,
  },
  model: {
    type: String,
    required: [true, "Please provide vehicle model"],
    maxlength: 100,
  },
  year: {
    type: String,
    enum: [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
    ],
    default: "2010",
  },
});
