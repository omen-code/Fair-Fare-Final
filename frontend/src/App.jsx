import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import { Routes, Route } from "react-router-dom"
import Profile from "./pages/profile/profile"
import Tc from "./pages/TermsAndConditions/TermsAndConditions"
import Confirmation from "./pages/confirmation/confirmation"
import Login from "./pages/login/login"
import SavedLocations from "./pages/savedlocations/savedlocation"
import Aboutus from "./pages/About/About"

const App = () => {
  return(
    <>
  <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/confirmation' element={<Confirmation/>}/>
    <Route path='/saved-locations' element={<SavedLocations/>}/>
    <Route path='/about_us' element={<Aboutus/>}/>
    <Route path='/confirmation' element={<Confirmation/>}/>
    <Route path='/tc' element={<Tc/>}/>
    </Routes>
    <Footer />
    </>
  )
} 

export default App