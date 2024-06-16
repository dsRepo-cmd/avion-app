"use client";

import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

function SignInForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "", signIn: "" });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = { email: "", password: "", signIn: "" };

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

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const res = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });
    console.log("res?.error", res?.error);
    if (res && !res.error) {
      router.push("/");
    } else {
      setErrors((prev) => ({
        ...prev,
        signIn: res?.error || "An unexpected error occurred.",
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Typography size="24px" tag="h2">
        Sign In
      </Typography>
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
          name="password"
          className="px-8 py-4  "
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && (
          <div className="text-red-500">{errors.password}</div>
        )}
      </div>
      {errors.signIn && <div className="text-red-500">{errors.signIn}</div>}
      <Button className=" mt-4" type="submit">
        Sign in
      </Button>
    </form>
  );
}

export default SignInForm;
