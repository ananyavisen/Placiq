import error404 from "../../assets/error.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="flex flex-col items-center text-center">

        {/* Robot + 404 Illustration */}
        <img
          src={error404}
          alt="404 Page Not Found"
          className="w-80 max-w-[75vw] h-auto object-contain"
        />

        {/* Message */}
        <h1 className="mt-2 text-xl leading-tight font-bold tracking-tight text-[#10152F]">
          Page not found
        </h1>

        <p className="mt-3 mb-6 text-sm leading-6 text-[#5F6680]">
          The page you’re looking for doesn’t exist
          <br />
          or has been moved.
        </p>

        {/* Go to Dashboard */}
        <Link to="/" >
        <button
          className="
            flex items-center justify-center gap-2
            rounded-[10px]
            bg-linear-to-r from-[#7137E8] to-[#8B3FF2]
            px-6 py-3
            text-[15px] font-semibold text-white
            shadow-[0_8px_20px_rgba(117,55,232,0.22)]
            transition-all duration-200
            hover:-translate-y-0.5
            hover:shadow-[0_12px_25px_rgba(117,55,232,0.3)]
            active:translate-y-0
          "
        >
          
          <span className="text-xl leading-none">⌂</span>
          Go to Dashboard
        </button></Link>

      </div>
    </div>
  );
};

export default Error;