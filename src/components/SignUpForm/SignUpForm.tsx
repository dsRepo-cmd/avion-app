"use client";

import { FormEventHandler, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import { useSession } from "next-auth/react";
import Typography from "../Typography/Typography";

function SignUpForm() {
  const { data: session, status: sessionStatus } = useSession();

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    signUp: "",
    name: "",
  });

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/profile");
    }
  }, [sessionStatus, router]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = { email: "", password: "", signUp: "", name: "" };

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }
    if (!formData.name) {
      newErrors.name = "Name is required.";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        name: formData.name,
      }),
    });

    if (res.status === 400) {
      setErrors((prev) => ({
        ...prev,
        signUp: res.statusText,
      }));
    }
    if (res.status === 200) {
      router.push("/signin");
    } else {
      setErrors((prev) => ({
        ...prev,
        signUp: "An unexpected error occurred.",
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Typography size="24px" tag="h2">
          Sign Up
        </Typography>
        <div className="flex flex-col gap-2">
          <input
            type="name"
            name="name"
            className="px-8 py-4  "
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <div className="text-red-500">{errors.name}</div>}
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="email"
            className="px-8 py-4  "
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="text-red-500">{errors.email}</div>}
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="password"
            className="px-8 py-4  "
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <div className="text-red-500">{errors.password}</div>
          )}
        </div>
        {errors.signUp && <div className="text-red-500">{errors.signUp}</div>}
        <Button className=" mt-4" type="submit">
          Sign Up
        </Button>
      </form>
    )
  );
}

export default SignUpForm;
