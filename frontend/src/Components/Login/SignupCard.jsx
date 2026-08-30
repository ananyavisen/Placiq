import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import GoogleIcon from "../icons/gmail";
import GithubIcon from "../icons/github";
import LinkedinIcon from "../icons/linkedin";

export default function SignupCard({ onLogin }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // Frontend password match check
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/auth/signup/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Signup successful:", data);

        alert("Account created successfully!");

        // Go to login
        onLogin();
      } else {
        console.log("Signup failed:", data);

        // Password validation errors
        if (data.password) {
          setError(
            Array.isArray(data.password)
              ? data.password.join(" ")
              : data.password
          );
        }

        // Confirm password error
        else if (data.confirmPassword) {
          setError(
            Array.isArray(data.confirmPassword)
              ? data.confirmPassword.join(" ")
              : data.confirmPassword
          );
        }

        // Email error
        else if (data.email) {
          setError(
            Array.isArray(data.email)
              ? data.email.join(" ")
              : data.email
          );
        }

        // General error
        else {
          setError("Signup failed. Please check your details.");
        }
      }
    } catch (error) {
      console.error("Error connecting to server:", error);

      navigate("/error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        w-full
        max-w-107
        h-full
        rounded-[30px]
        px-8
        py-8
        shadow-xl
      "
    >
      <form onSubmit={handleSubmit}>
        {/* Heading */}
        <h1 className="font-[DM_Serif-Display] text-4xl font-bold leading-none text-[#49344C]">
          Create Account
        </h1>

        <p className="mt-3 font-[Inter] text-[#6B6478]">
          Start your placement journey with Placiq.
        </p>

        {/* Full Name */}
        <div className="mt-6">
          <label className="mb-3 block font-[Inter] text-[15px] font-semibold text-[#2F314D]">
            Full Name
          </label>

          <div className="flex h-12 items-center rounded-2xl border border-[#ECE4EF] px-4">
            <User size={15} className="text-[#8B72D6]" />

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Name"
              required
              className="ml-3 w-full bg-transparent outline-none placeholder:text-[#B9B2C3]"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mt-3">
          <label className="mb-3 block font-[Inter] text-[15px] font-semibold text-[#2F314D]">
            Email
          </label>

          <div className="flex h-12 items-center rounded-2xl border border-[#ECE4EF] px-4">
            <Mail size={15} className="text-[#8B72D6]" />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="G-mail or Outlook"
              required
              className="ml-3 w-full bg-transparent outline-none placeholder:text-[#B9B2C3]"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mt-3">
          <label className="mb-3 block font-[Inter] text-[15px] font-semibold text-[#2F314D]">
            Password
          </label>

          <div className="flex h-12 items-center rounded-2xl border border-[#ECE4EF] px-4">
            <Lock size={20} className="text-[#8B72D6]" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              required
              className="ml-3 w-full bg-transparent outline-none placeholder:text-[#B9B2C3]"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-[#8B72D6]"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          {/* Password requirements */}
          <p className="mt-1 text-[11px] text-[#6B6478]">
            At least 8 characters with a letter, number and special character.
          </p>
        </div>

        {/* Confirm Password */}
        <div className="mt-3">
          <label className="mb-3 block font-[Inter] text-[15px] font-semibold text-[#2F314D]">
            Confirm Password
          </label>

          <div className="flex h-14 items-center rounded-2xl border border-[#ECE4EF] px-4">
            <Lock size={20} className="text-[#8B72D6]" />

            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
              className="ml-3 w-full bg-transparent outline-none placeholder:text-[#B9B2C3]"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword((prev) => !prev)
              }
              className="text-[#8B72D6]"
            >
              {showConfirmPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <p className="mt-3 text-center text-sm font-medium text-red-500">
            {error}
          </p>
        )}

        {/* Signup Button */}
        <button
          type="submit"
          disabled={loading}
          className="
            mt-6
            flex
            h-12
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-linear-to-r
            from-[#F99B7A]
            to-[#EA7567]
            font-[Manrope]
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-[1.02]
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? "Creating Account..." : "Create Account"}

          {!loading && <ArrowRight size={20} />}
        </button>

        {/* Login */}
        <p className="mt-3 text-center font-[Inter] text-[#6B6478]">
          Already have an account?

          <button
            type="button"
            onClick={onLogin}
            className="ml-2 font-semibold text-[#EA7567] hover:underline"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}