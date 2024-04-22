const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const waterBillSchema = new Schema({
    industry_id: {
        type: Schema.Types.ObjectId,
        ref: 'Industry', // Referencing the Industry model
        required: true
    },
    water_meter_number: {
        type: String,
        required: true
    },
    water_units_consumed: {
        type: Number,
        required: true
    },
    sub_total: {
        type: Number,
        required: true
    },
    tax_id: {
        type: String,
        required: true
    },
    total_bill_amount: {
        type: Number,
        required: true
    },
    bill_due_date: {
        type: Date,
        required: true
    },
    bill_payment_date: {
        type: Date
    },
    bill_status: {
        type: String,
        enum: ['Unpaid', 'Paid'],
        default: 'Unpaid'
    },
    bill_issued_date: {
        type: Date,
        required: true
    },
    meter_reading_old: {
        type: Number,
        required: true
    },
    meter_reading_new: {
        type: Number,
        required: true
    },
    from_date: {
        type: Date,
        required: true
    },
    to_date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('WaterBill', waterBillSchema);
