"use client";

import { FormEventHandler, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import { useSession } from "next-auth/react";
import Typography from "../Typography/Typography";
import Input from "../Input/Input";

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
      <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
        <Typography size="24px" className=" mb-3" tag="h2">
          Sign Up
        </Typography>

        <Input
          type="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          label="Name"
          required
        />

        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          label="Email"
          required
        />

        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          label="Password"
          required
        />

        <Button className=" mt-4" type="submit">
          Sign Up
        </Button>
        {errors.signUp && <div className=" text-error">{errors.signUp}</div>}
      </form>
    )
  );
}

export default SignUpForm;
