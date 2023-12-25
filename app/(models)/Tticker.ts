

import mongoose, { Schema } from "mongoose";


mongoose.connect(process.env.MONGODB_URL);

mongoose.Promise = global.Promise;

const ticketSChema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: String,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
)

const Ticket = mongoose.model?.Ticket || mongoose.model("Ticket", ticketSChema);

export default Ticket;