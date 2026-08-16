import { ArrowLeft, Mail, Send, Headphones } from "lucide-react";
import logo from "../../assets/logo.png";
import forgotPasswordImg from "../../assets/forgot-password.png";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="px-2 py-2">
      {/* Logo */}
      <div className="ml-6 flex items-center gap-3">
     <img
        src={logo}
        alt="Placiq"
        className="h-14 w-14 object-contain"
     />

    <div>
       <h2 className="text-[28px] font-bold leading-none text-[#1F245C]">
      Placiq
      </h2>

    <p className="mt-1 text-[13px] leading-5 text-[#6B7280]">
      Smart Prep.
      <br />
      Right Match.
    </p>
  </div>
</div>

      {/* Main Content */}
      <div className="mx-auto -mt-10 flex max-w-4xl flex-col items-center">

        {/* Back to Login */}
        <div className="mb-1 w-full max-w-2xl">
          <Link to="/login">
          <button className="flex items-center gap-2 text-[14px] font-medium text-[#6C3CF0] hover:underline">
            <ArrowLeft size={18} />
            Back to Login
          </button></Link>
        </div>

        {/* Heading */}
        <div className="mb-0 text-center">
          <h1 className="text-[32px] font-bold text-[#1F245C]">
            Forgot Password?
          </h1>

          <p className="mt-1 text-[15px] text-[#6B7280]">
            No worries! Enter your email address and we'll send you
            <br />
            a link to reset your password.
          </p>
        </div>

        {/* Card */}
        <div className="w-full max-w-2xl rounded-3xl border border-white/60 bg-white/85 px-5 py-1 shadow-[0_10px_35px_rgba(80,60,120,0.08)] backdrop-blur-sm">

          {/* Illustration */}
          <div className="-mt-1 flex justify-center">
            <img
              src={forgotPasswordImg}
              alt="Password reset"
              className="h-24 w-24 object-contain"
            />
          </div>

          {/* Card Heading */}
          <div className="-mt-5 text-center">
            <h2 className="text-[22px] font-semibold text-[#1F245C]">
              Enter your email address
            </h2>

            <p className="mt-1 text-[14px] text-[#6B7280]">
              We'll send a password reset link to your email.
            </p>
          </div>

          {/* Email */}
          <div className="mt-1">
            <label className="text-[13px] font-medium text-[#1F245C]">
              Email Address
            </label>

            <div className="relative mt-2">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
              />

              <input
                type="email"
                placeholder="Enter your email address"
                className="h-10 w-full rounded-xl border border-[#D9DCE5] bg-white px-11 text-[14px] text-[#1F245C] outline-none transition focus:border-[#8B5CF6]"
              />
            </div>
          </div>

          {/* Reset Button */}
          <button className="mt-2 flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#6C3CF0] text-[15px] font-medium text-white shadow-sm transition hover:bg-[#5B2FDC]">
            <Send size={17} />
            Send Reset Link
          </button>

          {/* OR */}
          <div className="my-1.5 flex items-center gap-2">
            <div className="h-px flex-1 bg-[#E5E7EB]" />
            <span className="text-[13px] text-[#9CA3AF]">OR</span>
            <div className="h-px flex-1 bg-[#E5E7EB]" />
          </div>

          {/* Google */}
          <button className="flex h-10 w-full items-center justify-center gap-3 rounded-xl border border-[#CDBBFF] bg-white text-[14px] font-medium text-[#1F245C] transition hover:bg-[#FAF8FF]">
            <span className="text-[18px] font-bold">G</span>
            Continue with Google
          </button>

          {/* Login */}
          <p className="mt-1 text-center text-[14px] text-[#6B7280]">
            Remember your password?{" "}
            <button className="font-medium text-[#6C3CF0] hover:underline">
              Login
            </button>
          </p>
        </div>

        {/* Support */}
        <div className="mt-0 flex w-full max-w-2xl items-center justify-between rounded-2xl border border-white/70 bg-white/75 px-4 py-1.5 shadow-sm backdrop-blur-sm">

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEE8FF] text-[#6C3CF0]">
              <Headphones size={19} />
            </div>

            <div>
              <p className="text-[14px] font-semibold text-[#1F245C]">
                Still having trouble?
              </p>

              <p className="text-[12px] text-[#6B7280]">
                Contact our support team and we'll help you recover your account.
              </p>
            </div>
          </div>

          <button className="text-[14px] font-medium text-[#6C3CF0] hover:underline">
            Contact Support
          </button>
        </div>

      </div>
    </div>
  );
}