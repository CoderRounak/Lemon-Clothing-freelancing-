import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";
import { Home } from "./components/Home";
import  Navbar  from "./components/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Alert alert={{msg:"success",type:"success"}} /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/about" element={} /> */}
          {/* <Route path="/" element={<Home/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
