import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx"
import AboutUs from "./pages/NavBarPages/AboutUs.jsx"
import Reception from "./pages/NavBarPages/Acceptance.jsx"
import News from "./pages/NavBarPages/News.jsx"
import OurMerch from "./pages/NavBarPages/OurMerch.jsx"
import Contacts from "./pages/NavBarPages/Contacts.jsx"
import JoinUs from "./pages/NavBarPages/JoinUs.jsx"
import Goals from "./pages/NavBarPages/AboutUs_Co-Pages/Goals.jsx"
import Institutions from "./pages/NavBarPages/AboutUs_Co-Pages/Institutions.jsx"
import SubjectsEdu from "./pages/NavBarPages/AboutUs_Co-Pages/SubjectsEdu.jsx"
import Teachers from "./pages/NavBarPages/AboutUs_Co-Pages/Teachers.jsx"

export default function NavRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Reception" element={<Reception/>}/>
        <Route path="/News" element={<News/>}/>
        <Route path="/OurMerch" element={<OurMerch/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>
        <Route path="/JoinUs" element={<JoinUs/>}/>
        <Route path="/Goals" element={<Goals/>}/>
        <Route path="/Institutions" element={<Institutions/>}/>
        <Route path="/SubjectsEdu" element={<SubjectsEdu/>}/>
        <Route path="/Teachers" element={<Teachers/>}/>
      </Routes>
    </>
  )
}

