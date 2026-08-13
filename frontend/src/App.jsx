import Login from "./Components/Login/Login";
import bg from "./assets/bg.png";
import AICoach from "./Components/AICoach/AICoach";

function App() {
  const isAICoachPage = window.location.pathname === "/ai-coach";

  if (isAICoachPage) {
    return <AICoach />;
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-5 sm:p-4 lg:p-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Login />
    </div>
  );
}

export default App;