"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Button from "@/components/Button/Button";

const SignUp = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/profile");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    if (!name) {
      setError("Name is required");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
        }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/signin");
      }
    } catch (error) {
      setError("Error, try again");
      console.error(error);
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="justify-center mt-16 w-[500px]">
        <div className=" p-10 flex flex-col gap-4 w-full">
          <h1 className="">SignUp</h1>
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className=" w-full"
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                required
                className=" w-full"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                required
                className=" w-full"
              />
            </div>
            <Button type="submit">SignUp</Button>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>
          <div className="text-center text-gray-500 mt-4">- OR -</div>
          <Link
            className="block text-center text-blue-500 hover:underline mt-2"
            href="/signin"
          >
            Login with an existing account
          </Link>
        </div>
      </div>
    )
  );
};

export default SignUp;
