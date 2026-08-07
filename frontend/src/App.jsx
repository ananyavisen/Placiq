import Assessment from "./Components/Assessment/Assessment";
import bg from "./assets/bg.png";

function App() {
  return (
    <div
      className="h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Assessment />
    </div>
  );
}

export default App;
