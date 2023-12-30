import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";

// for showing toast messages
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminEditProduct from "./pages/admin/AdminEditProduct";
import AdminRoutes from "./protected/AdminRoutes";
import UserRoutes from "./protected/UserRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element = {<UserRoutes/>}>
          <Route path='/proile' element = {<h1>Profile Page</h1>}>
        </Route>
        </Route>
        <Route element={<AdminRoutes />}>
          {/* Admin routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
         

          {/* Edit product */}
          <Route path="/admin/edit/:id" element={<AdminEditProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
