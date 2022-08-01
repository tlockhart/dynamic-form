import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "./components/global/templates/Modal";
import Home from "./page/Home";
import SuperHome from "./page/SuperHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/super" element={<SuperHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
