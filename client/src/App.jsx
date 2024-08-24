import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Tab from "./pages/Table";
import UrequstForm from "./pages/UrequstForm";
import RequstForm from "./pages/RequstForm";




export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route element={<PrivateRoute />}>
          <Route path="/table" element={<Tab />} />
          <Route path="/add" element={<RequstForm />} />
          <Route path="/update/:upId" element={<UrequstForm />} />
        
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
