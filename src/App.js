import logo from "./logo.svg";
import "./App.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Newproduct from "./pages/Newproduct/Newproduct";
import Editproduct from "./pages/Editproduct/Editproduct";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/create" element={<Newproduct />} />
          <Route path="/product/edit/:slug" element={<Editproduct />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
