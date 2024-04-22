const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const financeSchema = new Schema({
  CGST_number: {
    type: String,
    required: true,
    unique: true,
    default: null
  },
  SGST_number: {
    type: String,
    required: true,
    unique: true,
    default: null
  },
  IGST_number: {
    type: String,                   //either the industry has an SGST,CGST number or an IGST number(Can't have both)
    required: true,
    unique: true,
    default: null
  },
  additional_charges: {
    type: String,
    required: true,
  },
  water_bills_rate_above_10k: {
    type: String,
    required: true,
  },
  water_bills_rate_below_10k: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Finance", financeSchema);
