import { Schema, Model } from "mongoose";

const transactionSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        default: "others"
    },
    type: {
        type: String,
        enum: ["credit", "debit"]
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
}, {
    timestamps: true
});

const Transaction = model("Transaction", transactionSchema)

export default Transaction