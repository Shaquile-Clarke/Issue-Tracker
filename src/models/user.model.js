import { model, models, Schema } from "mongoose";
import { encryptPassword } from "../lib/passEncrypt";

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const capitilize = (name) => {
  const cleanName = name.trim().toLowerCase();
  const newName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
  return newName;
};

UserSchema.pre("save", async function () {
  const user = this;

  user.firstName = capitilize(user.firstName);
  user.lastName = capitilize(user.lastName);
  user.email = user.email.toLowerCase();
  user.password = await encryptPassword(user.password);
});

export const User = models.User || model("User", UserSchema);
