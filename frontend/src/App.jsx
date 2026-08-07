import Resources from "./Components/Resources/Resources";
import bg from "./assets/bg.png";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-5 sm:p-4 lg:p-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Resources />
    </div>
  );
}

export default App;