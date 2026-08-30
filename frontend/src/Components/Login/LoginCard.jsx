  import {
    Mail,
    Lock,
    Eye,
    ArrowRight,
    ShieldCheck,
  } from "lucide-react";
  
  import { useState } from "react";
 import { Link } from "react-router-dom";
 import Github from "../icons/github";
 import Linkedin from "../icons/linkedin";
 import Gmail from "../icons/gmail";
 import { useNavigate } from "react-router-dom";

  export default function LoginCard({onSignup}) {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleChange = (e) => {
      setError("");
  
      setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
      }));
  };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
  
      try {
          // Get CSRF token
          const csrfResponse = await fetch(
              "http://localhost:8000/api/auth/csrf/",
              {
                  credentials: "include",
              }
          );
  
          if (!csrfResponse.ok) {
              throw new Error("Failed to get CSRF token");
          }
  
          const csrfData = await csrfResponse.json();
  
          // Login
          const response = await fetch(
              "http://localhost:8000/api/auth/login/",
              {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                      "X-CSRFToken": csrfData.csrfToken,
                  },
                  credentials: "include",
                  body: JSON.stringify(formData),
              }
          );
  
          const data = await response.json();

          console.log("Login status:", response.status);
          console.log("Login response:", data);
          
          if (response.ok) {
            navigate("/dashboard");
          } else {
            setError(
              data.non_field_errors?.[0] ||
              "Invalid email or password."
            );
          }
  
      } catch (error) {
          console.error("Login error:", error);
          setError("Unable to connect to the server.");
      }
  };

    return (
      <form onSubmit={handleSubmit} className="flex h-full flex-col">
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
  
        {/* Heading */}
  
        <h1 className="font-[DM_Serif-Display] text-4xl font-bold leading-none text-[#49344C]">
          Let's Upgrade
        </h1>
  
        <p className="mt-4 font-[Inter] text-[15px] text-[#6B6478]">
          Login to continue your placement journey.
        </p>
  
        {/* Email */}
  
        <div className="mt-7">
  
          <label className="mb-3 block font-[Inter] text-[15px] font-semibold text-[#2F314D]">
            Email or Phone Number
          </label>
  
          <div className="flex h-12 items-center rounded-2xl border border-[#ECE4EF] px-4 transition focus-within:border-[#EA7567]">
  
            <Mail
              size={20}
              strokeWidth={2}
              className="text-[#8B72D6]"
            />
  
            <input
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               placeholder="E-mail"
               required
              className="ml-3 w-full bg-transparent font-[Inter] outline-none placeholder:text-[#B9B2C3]"
            />
  
          </div>
  
        </div>
  
        {/* Password */}
  
        <div className="mt-7">
  
          <label className="mb-3 block font-[Inter] text-[15px] font-semibold text-[#2F314D]">
            Password
          </label>
  
          <div className="flex h-12 items-center rounded-2xl border border-[#ECE4EF] px-4 transition focus-within:border-[#EA7567]">
  
            <Lock
              size={20}
              strokeWidth={2}
              className="text-[#8B72D6]"
            />
  
            <input
               type="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
               placeholder="Enter your password"
               required
              className="ml-3 w-full bg-transparent font-[Inter] outline-none placeholder:text-[#B9B2C3]"
            />
  
            <button type="button">
              <Eye
                size={18}
                strokeWidth={2}
                className="text-[#8B72D6]"
              />
            </button>
  
          </div>
  
        </div>
        {error && (
            <p className="mt-3 text-sm font-medium text-red-500">
                {error}
            </p>
        )}
        {/* Forgot Password */}
  
        <div className="mt-4 text-right">
          <Link to="/forgot-password">
          <button type="button" className="font-[Inter] text-sm font-medium text-[#8B72D6] transition hover:text-[#EA7567]">
            Forgot password?
          </button></Link>
  
        </div>
  
        {/* Login */}
  
        <button type="submit"
          className="
          mt-6
          flex
          h-10
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-linear-to-r
          from-[#F99B7A]
          to-[#EA7567]
          font-[Manrope]
          text-md
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-[1.02]
        "
        >
          Login
  
          <ArrowRight size={20} />
        </button>
  
        {/* Divider */}
  
        <div className="my-6 flex items-center">
  
          <div className="h-px flex-1 bg-[#ECE4EF]" />
  
          <span className="mx-4 whitespace-nowrap text-sm font-[Inter] text-[#8B72D6]">
            or continue with
          </span>
  
          <div className="h-px flex-1 bg-[#ECE4EF]" />
  
        </div>
  
        {/* Social Buttons */}
  
        <div className="grid grid-cols-3 justify-center gap-3">

        <button type="button">
            <Github />
        </button>
        <button type="button"><Linkedin/></button>
        <button type="button"><Gmail/></button>
       
        

    </div>
  
        {/* Signup */}
  
        <p className="mt-8 text-center font-[Inter] text-[#6B6478]">
          Don't have an account?
  
          <button className="ml-2 font-semibold text-[#EA7567] hover:underline" onClick={onSignup} >
            Sign Up
          </button>
        </p>

      </div>
      </form>
    );
  }