import { Route, Routes } from "react-router-dom";
import Message from "./screen/message";
import Teddy from "./screen/teddy";

function App() {
  return (
    <div className="parent">
      <Routes>
        <Route path="/" element={<Teddy />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
