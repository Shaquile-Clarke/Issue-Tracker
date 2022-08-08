import { compare, hash } from "bcrypt";

export const encryptPassword = async (password) => {
  const encryptedPassword = await hash(password, 12);
  return encryptedPassword;
};

export const passwordValidator = async (storedPassword, enteredPassword) => {
  const isValid = await compare(storedPassword, enteredPassword);
  return isValid;
};
