import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import DisplayData from "./components/DisplayData";
import Adddata from "./components/Adddata";
import UpdateData from "./components/UpdateData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayData />}></Route>
          <Route path="/addData" element={<Adddata />}></Route>
          <Route path="/updatedata/:id" element={<UpdateData />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
