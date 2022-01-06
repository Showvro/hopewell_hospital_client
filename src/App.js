import "./App.css";
import Home from "./components/Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Pages/Contact/Contact";
import NotFound from "./components/Pages/NotFound/NotFound";
import AuthContext from "./context/AuthContext";
import Login from "./components/Authorization/Login/Login";
import Register from "./components/Authorization/Login/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import AddServices from "./components/Dashboard/AddServices/AddServices";
import ManageAppoinment from "./components/Dashboard/ManageAppointMents/ManageAppoinment";
import Payments from "./components/Dashboard/Payments/Payments";
import MyCarts from "./components/Dashboard/MyCarts/MyCarts";
import Doctors from "./components/Pages/Doctors/Doctors";
import ShowBlog from "./components/ShowBlogs/showblog";
import Appointment from "./components/Pages/Appointment/Appointment";
import About from "./components/Pages/About/About";
import AddDoctor from "./components/Dashboard/AddDoctor/AddDoctor";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Myap from "./components/Dashboard/Myap/Myap.";

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/blogs" element={<ShowBlog />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/appoinments"
            element={
              <PrivateRoute>
                <Appointment />
              </PrivateRoute>
            }
          />
          {/* dashboard route  */}

          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="makeadmin" element={<MakeAdmin />} />
            <Route path="adservices" element={<AddServices />} />
            <Route path="manageappoinment" element={<ManageAppoinment />} />
            <Route path="payments" element={<Payments />} />
            <Route path="mycarts" element={<MyCarts />} />
            <Route path="adddoctor" element={<AddDoctor />} />
            <Route path="myap" element={<Myap />} />
          </Route>
          {/* dashboard route ends  */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
