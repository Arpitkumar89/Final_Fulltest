import Email from "../model/contactModel.js";
import sendMail from "../utils/mailer.js";

export const createEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newEmail = await Email.create({ name, email, message });

    await sendMail({
      to: process.env.EMAIL,
      subject: `New Contact Form from ${name}`,
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    });

    res.status(201).json({ success: true, data: newEmail });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getEmails = async (req, res) => {
  try {
    const emails = await Email.find().sort({ createdAt: -1 });
    res.json({ success: true, data: emails });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


export const getEmailById = async (req, res) => {
  try {
    const email = await Email.findById(req.params.id);
    if (!email) return res.status(404).json({ success: false, message: "Email not found" });
    res.json({ success: true, data: email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


export const updateEmail = async (req, res) => {
  try {
    const email = await Email.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!email) return res.status(404).json({ success: false, message: "Email not found" });
    res.json({ success: true, data: email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


export const deleteEmail = async (req, res) => {
  try {
    const email = await Email.findByIdAndDelete(req.params.id);
    if (!email) return res.status(404).json({ success: false, message: "Email not found" });
    res.json({ success: true, message: "Email deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
