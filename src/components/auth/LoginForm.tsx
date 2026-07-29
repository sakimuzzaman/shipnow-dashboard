"use client";

import { FormEvent, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface FormErrors {
  email?: string;
  password?: string;
}

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState<FormErrors>({});

  function validateForm() {
    const newErrors: FormErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="w-full max-w-[400px]">
      {/* Form logo */}
      <div className="flex justify-center">
      <div
            aria-hidden="true"
            className="h-8 w-4 -skew-x-12"
          >
            <Image
                src="/form-logo.png" 
                alt="form-logo"
                fill
                className="object-cover"
                priority
      />
          </div>
      </div>

      {/* Heading */}
      <div className="mt-8 text-center">
        <h2 className="text-[24px] font-semibold text-[#292D32]">
          Welcome Back
        </h2>

        <p className="mt-2 text-[13px] text-[#7A7D85]">
          Log in to continue managing your logistics with ShipNow
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-5"
        noValidate
      >
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[12px] font-medium text-[#4B4E56]"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);

              if (errors.email) {
                setErrors((current) => ({
                  ...current,
                  email: undefined,
                }));
              }
            }}
            placeholder="Enter a valid email address"
            className={`h-11 w-full rounded-md border bg-[#F5F5F7] px-4 text-sm outline-none transition focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-200"
                : "border-transparent focus:border-[#7563CF] focus:ring-[#7563CF]/20"
            }`}
          />

          {errors.email && (
            <p className="mt-1 text-xs text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-[12px] font-medium text-[#4B4E56]"
          >
            Password
          </label>

          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);

                if (errors.password) {
                  setErrors((current) => ({
                    ...current,
                    password: undefined,
                  }));
                }
              }}
              placeholder="Create a strong password"
              className={`h-11 w-full rounded-md border bg-[#F5F5F7] px-4 pr-12 text-sm outline-none transition focus:ring-2 ${
                errors.password
                  ? "border-red-500 focus:ring-red-200"
                  : "border-transparent focus:border-[#7563CF] focus:ring-[#7563CF]/20"
              }`}
            />

            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B8E96]"
            >
              {showPassword ? (
                <EyeOff size={17} />
              ) : (
                <Eye size={17} />
              )}
            </button>
          </div>

          {errors.password && (
            <p className="mt-1 text-xs text-red-500">
              {errors.password}
            </p>
          )}
        </div>

        {/* Remember and forgot password */}
        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-2 text-xs text-[#777B84]">
            <input
              type="checkbox"
              className="h-3.5 w-3.5 accent-[#7563CF]"
            />

            Remember Me
          </label>

          <button
            type="button"
            className="text-xs text-[#7563CF] hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        {/* Login */}
        <button
          type="submit"
          className="h-12 w-full rounded-md bg-[#333333] text-sm font-medium text-white transition hover:bg-[#222222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7563CF] focus-visible:ring-offset-2"
        >
          Login
        </button>
      </form>

      {/* Register */}
      <p className="mt-6 text-center text-xs text-[#8B8E96]">
        Don&apos;t have an account?{" "}

        <button
          type="button"
          className="text-[#7563CF] hover:underline"
        >
          Register
        </button>
      </p>
    </div>
  );
}