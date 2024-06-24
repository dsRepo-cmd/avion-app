"use client";

import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "../../components/Button/Button";
import Typography from "../../components/Typography/Typography";
import Input from "../../components/Input/Input";

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
    if (res?.ok) {
      router.push("/profile");

      return;
    }

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

      <Input
        type="email"
        name="email"
        label="Email"
        onChange={handleChange}
        error={errors.email}
        value={formData.email}
        required
      />

      <Input
        type="password"
        name="password"
        label="Password"
        onChange={handleChange}
        error={errors.password}
        value={formData.password}
        required
      />

      <Button className=" mt-4" type="submit">
        Sign in
      </Button>
      {errors.signIn && <div className=" text-error">{errors.signIn}</div>}
    </form>
  );
}

export default SignInForm;
