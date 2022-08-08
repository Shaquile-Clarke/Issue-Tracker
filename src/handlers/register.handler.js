export const initRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordRepeat: "",
};

export function registerReducer(state, action) {
  return { ...state, [action.type]: action.value };
}
