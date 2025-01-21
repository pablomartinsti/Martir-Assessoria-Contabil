import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Start from "./Pages/Start";
import Obrigado from "./Pages/Obrigado";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />

        <Route path="/obrigado" element={<Obrigado />} />
      </Routes>
    </Router>
  );
}

export default App;
