import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: { 
      type: String, 
      required: [true, "Email is required"], 
      match: [/\S+@\S+\.\S+/, "Email is invalid"] 
    },
    message: { type: String, required: [true, "Message is required"] },
  },
  { timestamps: true }
);

const Email = mongoose.model("Email", emailSchema);
export default Email;
