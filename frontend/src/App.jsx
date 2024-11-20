import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile"; // Import Profile page
// Import Wallet page
import Login from "./pages/Login/Login"; // Import Login page
import SavedLocations from "./pages/SavedLocations/SavedLocation"; // Import Saved Locations page
import About from "./pages/About/About"; // Import About Us page
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions"; // Import Terms & Conditions page
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/profile" element={<Profile />} /> {/* Profile Page */}
        <Route path="/login" element={<Login />} /> {/* Login Page */}
        <Route path="/saved-locations" element={<SavedLocations />} />{" "}
        {/* Saved Locations Page */}
        <Route path="/about" element={<About />} /> {/* About Us Page */}
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />{" "}
        {/* Terms & Conditions Page */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
