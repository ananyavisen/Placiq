import bg from "../../assets/bg.png";
import LoginContainer from "./LoginContainer";

export default function Login() {
  return (
      <div
  className="min-h-screen bg-cover bg-center bg-no-repeat p-5 sm:p-4 lg:p-4"
  style={{ backgroundImage: `url(${bg})` }}
>
  <LoginContainer />
    </div>
  );
}