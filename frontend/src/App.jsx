import Resources from "./Components/Resources/Resources";
import bg from "./assets/bg.png";

function App() {
  return (
    <div
      className="h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Resources />
    </div>
  );
}

export default App;
