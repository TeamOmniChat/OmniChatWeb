import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ marginTop: 30 }} />
      <Routes>
        <Route path="/">
          <Route element={<Home />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
