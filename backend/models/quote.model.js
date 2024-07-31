import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    quote: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    writtenBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Quote = mongoose.model("Quote", quoteSchema);
export default Quote;
