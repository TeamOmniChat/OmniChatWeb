import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ marginTop: 30 }} />
      <Routes>
        <Route path="/">
          <Route path="/auth">
            <Route element={<Login />} path="/auth/login" />
          </Route>
          <Route element={<Home />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
