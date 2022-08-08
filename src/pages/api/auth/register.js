import db from "../../../lib/connectDB";
import { User } from "../../../models/user.model";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400).json({ error: "Unable to handle request." });
  }

  const { password, passwordRepeat, email } = req.body;
  db();

  const isUser = await User.findOne({ email: email.toLowerCase() });

  if (isUser) {
    return res.status(409).json({ error: "User Already Exist." });
  }

  if (password.length < 7 || passwordRepeat.length < 7) {
    return res
      .status(401)
      .json({ error: "Password Must Be 7 Characters or Longer." });
  }

  if (password !== passwordRepeat) {
    return res.status(401).json({ error: "Password Do Not Match." });
  }

  const newUser = new User(req.body);

  await newUser.save();

  res.status(200).json({ message: req.body });
}
