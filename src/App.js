import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Authorization/Login/Login";
import Register from "./components/Authorization/Login/Register";
import Blog from "./components/Pages/Blog";
import Home from "./components/Pages/Home";


// // AOS Animation Init
// AOS.init();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />} />
            <Route path='/' exact component={Home} />
        {/* <Route path='/blog/:id' component={Blog} /> */}
         <Route path="/blog/:id" element={<Blog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
