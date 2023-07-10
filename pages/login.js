import { signIn } from "next-auth/client"; // 1️⃣ import signIn function
import { useRef } from "react";
import router from "next/router";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current?.value;
    const enteredPassword = passwordRef.current?.value;

    console.log();

    const result = await signIn("credentials", {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });

    if (!result.error) {
      // If sign-in was successful, redirect to home
      router.push("/");
    } else {
      // Handle error here, for example show a notification or update some local state
      console.error(result.error);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-10 rounded shadow-xl w-[300px] text-gray-800">
        <h1 className="text-2xl font-bold mb-5">Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="email" className="block mb-1 ">
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              className="w-full border p-2 rounded bg-white"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              className="w-full border p-2 rounded bg-white"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
