import logo from "../../assets/logo.png";
import HeroIllustration from "./HeroIllustration";
import { useState } from "react";
import HeroSection from "./HeroSection";
import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";

export default function LoginContainer() {
    const [isSignup, setIsSignup] = useState(false);
    return (
        <>
        <div className="h-[calc(100vh-24px)] sm:h-[calc(100vh-32px)] lg:h-[calc(100vh-40px)] w-full rounded-2xl lg:rounded-3xl
   bg-[#FFFCFA]/20 backdrop-blur-sm shadow-xl flex">
    <HeroSection />
    <HeroIllustration />
    <div className="flex-[0.95] rounded-3xl  flex items-center justify-center">
    {isSignup ? (
                    <SignupCard
                        onLogin={() => setIsSignup(false)}
                    />
                ) : (
                    <LoginCard
                        onSignup={() => setIsSignup(true)}
                    />
                )}
</div>
    </div>
  </>
    )
}