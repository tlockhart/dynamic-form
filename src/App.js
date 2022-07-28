import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "./components/global/templates/Modal";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
