import Link from "next/link";
import { useReducer, useState } from "react";
import { initRegister, registerReducer } from "../../handlers/register.handler";
import Button from "../Button";

export default function RegisterForm() {
  const [state, dispatch] = useReducer(registerReducer, initRegister);
  const [error, setError] = useState();

  function onChange(e) {
    const action = {
      type: e.target.name,
      value: e.target.value,
    };

    dispatch(action);
  }

  async function onSubmit(e) {
    e.preventDefault();
    const options = {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("/api/auth/register", options);
    const reply = await response.json();

    if (reply.error) {
      setError(reply.error);
    }
  }

  return (
    <div>
      <p className="text-center text-lg font-semibold py-2">{error}</p>
      <form onSubmit={onSubmit} className="w-full flex flex-col gap-5 ">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          onChange={onChange}
          className="h-12 py-1 px-4 rounded-md bg-white/80 ring-1 ring-cyan-900"
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          onChange={onChange}
          className="h-12 py-1 px-4 rounded-md bg-white/80 ring-1 ring-cyan-900"
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          onChange={onChange}
          className="h-12 py-1 px-4 rounded-md bg-white/80 ring-1 ring-cyan-900"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          minLength={7}
          onChange={onChange}
          className="h-12 py-1 px-4 rounded-md bg-white/80 ring-1 ring-cyan-900"
        />
        <input
          type="password"
          name="passwordRepeat"
          id="passwordRepeat"
          placeholder="Confirm Password"
          minLength={7}
          onChange={onChange}
          className="rounded-md h-12 py-1 px-4 bg-white/80 ring-1 ring-cyan-900"
        />

        <div className="flex flex-col gap-2">
          <Button>Register</Button>

          <Link href={"/login"}>
            <Button>Already Have An Account</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
