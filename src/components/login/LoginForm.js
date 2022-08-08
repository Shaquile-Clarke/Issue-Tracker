import Link from "next/link";
import Button from "../Button";

export default function LoginForm() {
  async function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="w-full flex flex-col gap-5">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          className="h-12 py-1 px-4 rounded-md bg-white/80 ring-1 ring-cyan-900"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="rounded-md h-12 py-1 px-4 bg-white/80 ring-1 ring-cyan-900"
        />

        <div className="flex flex-col gap-2">
          <Button>Login</Button>

          <Link href={"/register"}>
            <Button>Register</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
