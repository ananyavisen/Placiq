// import Roadmap from "./Components/roadmap/Roadmap";

// function App() {
//   return <Roadmap />;
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Background from "./Components/Common/Background";
import SidebarLayout from "./Components/Common/SidebarLayout";
import Roadmap from "./Components/roadmap/Roadmap";

function App() {
  return (
    <BrowserRouter>
      <Background>
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<Roadmap />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Route>
        </Routes>
      </Background>
    </BrowserRouter>
  );
}

export default App;