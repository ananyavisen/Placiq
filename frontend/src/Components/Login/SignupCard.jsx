import {
    User,
    Mail,
    Lock,
    Eye,
    ArrowRight,
  } from "lucide-react";
  import { useState } from "react";
  import GoogleIcon from "../icons/gmail";
  import GithubIcon from "../icons/github";
  import LinkedinIcon from "../icons/linkedin";
  
  export default function SignupCard({ onLogin }) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    
      const handleChange = (e) => {
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log("Signup:", formData);
    
        // Later:
        // await authService.signup(formData);
      };

    return (
      <div className=" w-full
            max-w-107
            h-full
            rounded-[30px]
           
            px-8
            py-8
            shadow-xl">
   <form onSubmit={handleSubmit}>
        {/* Heading */}
  
        <h1 className="font-[DM_Serif-Display] text-4xl font-bold leading-none text-[#49344C]">
          Create Account
        </h1>
  
        <p className="mt-3 font-[Inter] text-[#6B6478]">
          Start your placement journey with PrePal.
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
               type="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
               placeholder="Create password"
               required
              className="ml-3 w-full bg-transparent outline-none placeholder:text-[#B9B2C3]"
            />
  
            <Eye size={20} className="cursor-pointer text-[#8B72D6]" />
  
          </div>
  
        </div>
  
        {/* Confirm Password */}
  
        <div className="mt-3">
  
          <label className="mb-3 block font-[Inter] text-[15px] font-semibold text-[#2F314D]">
            Confirm Password
          </label>
  
          <div className="flex h-14 items-center rounded-2xl border border-[#ECE4EF] px-4">
  
            <Lock size={20} className="text-[#8B72D6]" />
  
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
              className="ml-3 w-full bg-transparent outline-none placeholder:text-[#B9B2C3]"
            />
  
          </div>
  
        </div>
  
        {/* Signup Button */}
  
        <button type="submit"
          className="
            mt-8
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
          "
        >
          Create Account
          <ArrowRight size={20} />
        </button>
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