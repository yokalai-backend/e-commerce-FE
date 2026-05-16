"use client";

import useInput from "@/app/hooks/useInput";
import { useRouter } from "next/navigation";
import handleLogin from "@/app/utils/auth/handle.login";

export default function Page() {
  const email = useInput();
  const password = useInput();
  const router = useRouter();

  return (
    <div className="h-dvh overflow-hidden bg-white flex items-center justify-center px-4">
      <main className="w-full max-w-md border border-black/10 rounded-2xl p-6 sm:p-8 shadow-xl bg-white">
        <header className="mb-8">
          <h2 className="text-2xl font-bold text-black">Welcome Back</h2>

          <p className="text-sm text-black/60 mt-1">Login to your account</p>
        </header>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            handleLogin(email.value, password.value, router);
          }}
          className="flex flex-col gap-5"
        >
          <input
            className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black placeholder:text-black/40 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
            type="email"
            placeholder="Email..."
            value={email.value}
            onChange={email.onChange}
          />

          <input
            className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black placeholder:text-black/40 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
            type="password"
            placeholder="Password..."
            value={password.value}
            onChange={password.onChange}
          />

          <button
            className="mt-2 rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-black/90 active:scale-[0.98]"
            type="submit"
          >
            Login
          </button>

          <p className="text-sm text-black/75 text-center">
            Don&apos;t have an account?{" "}
            <a
              href="/auth/register"
              className="text-blue-500/80 underline select-none"
            >
              Register
            </a>
          </p>
        </form>
      </main>
    </div>
  );
}
