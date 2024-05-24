import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Details from "./Pages/Details";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Details />} path="/:id/details" />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
