import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import { Routes, Route } from "react-router-dom"
import Profile from "./pages/profile/profile"
import Tc from "./pages/tc/Tc"

const App = () => {
  return(
    <>
  <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/confirmation' element={<Conformation/>}/>
    <Route path='/savedlocations' element={<SavedLocations/>}/>
    <Route path='/about_us' element={<FFAbout/>}/>
    <Route path='/confirmation' element={<Conformation/>}/>
    <Route path='/tc' element={<Tc/>}/>
    </Routes>
    <Footer />
    </>
  )
} 

export default App