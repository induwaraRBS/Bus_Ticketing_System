import "./App.css";
import Home from "./pages/Home Page/Home";
import AboutUs from "./pages/AboutUs Page/AboutUs";
import ContactUs from "./pages/AboutUs Page/AboutUs";
import Services from "./pages/Services Page/Services";
import OnlineBooking from "./pages/OnlineBooking Page/OnlineBooking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TImeTable from "./pages/TimeTable Page/TImeTable";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/Contactus" element={<ContactUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/OnlineBooking" element={<OnlineBooking />} />
          <Route path="/TimeTable" element={<TImeTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
