import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: [true, "Please provide vehicle make"],
      maxlength: 50,
    },
    registration: {
      type: String,
      required: [true, "Please provide registration"],
      maxlength: 50,
    },
    chassisNumber: {
      type: String,
      default: "Chassis number",
      required: true,
    },
    year: {
      type: String,
      enum: [
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
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
      default: "Year of manufacture",
    },
    rimSize: {
      type: String,
      enum: [
        "195-R15C",
        "205/70/R15",
        "205-R16C",
        "215/55/R17",
        "265/65/R17",
        "235/45/R18",
        "265/60/R18",
        "285/50/R20",
        "700R16",
      ],
      default: "Rim size",
    },
    insuranceDate: {
      type: String,
      required: [true, "Please provide Insurance date"],
      maxlength: 100,
    },
    attachedTo: {
      type: String,
      default: "Attached to",
      required: true,
    },
    vehicleLocation: {
      type: String,
      default: "My city",
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Vehicle", VehicleSchema);
