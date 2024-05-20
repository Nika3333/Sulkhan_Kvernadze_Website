import LinkButton from "./Components/LinkButton.jsx";
import CustomLink from "./Components/CustomLink.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import UniversityLogo from "../public/images/Uni-Logo-SVG.svg";

export default function NavBar() {

    const [ isOpen, setIsOpen] = useState(false)

    function ToggleMenuBtn() {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="navbar w-full h-16 flex justify-between items-center px-10 fixed top-0 left-0 z-50 max-md:h-12 bg-MainColor shadow-lg shadow-TextColor/15">
            <Link to="/" ><img src={UniversityLogo} alt="Logo" className="h-14 max-md:h-10"/></Link>
            <div className={`flex justify-center items-center gap-6 ${isOpen ? "max-lg:visible absolute flex-col top-20 right-4 bg-MainColor p-4 rounded-lg" : "max-lg:hidden h-full"}`}>
                <ul className={`flex justify-between text-center gap-6 ${isOpen ? "flex-col" : "h-full"}`}>
                    <CustomLink to="/" className={`hover:text-SecondaryColor focus-within:text-SecondaryColor ${isOpen ? "border-solid border-b-2 border-TextColor/50" : ""}`}>მთავარი</CustomLink>
                    <div className="relative group flex flex-col gap-4 h-full justify-center">
                        <CustomLink to="/AboutUs" className={`hover:text-SecondaryColor focus-within:text-SecondaryColor flex justify-center items-center flex-col ${isOpen ? "border-solid border-b-2 border-TextColor/50" : ""}`}>ჩვენ შესახებ</CustomLink>
                        <ul className={`bg-MainColor rounded-b-lg flex-col gap-4 ${isOpen ? "relative visible flex shadow-none p-0" : "p-3 hidden group-hover:flex group-focus-within:flex absolute top-full left-2/4 -translate-x-2/4 shadow-md shadow-TextColor/50"}`}>
                            <CustomLink className="border-solid border-b-2 border-TextColor/50 hover:text-SecondaryColor" to="/Goals">მიზნები</CustomLink>
                            <CustomLink className="border-solid border-b-2 border-TextColor/50 hover:text-SecondaryColor" to="/SubjectsEdu">საგნობრივი განათლება</CustomLink>
                            <CustomLink className="border-solid border-b-2 border-TextColor/50 hover:text-SecondaryColor" to="/Teachers">მასწავლებლები</CustomLink>
                            <CustomLink className="border-solid border-b-2 border-TextColor/50 hover:text-SecondaryColor" to="/Institutions">დაწესებულებები</CustomLink>
                        </ul>
                    </div>
                    <CustomLink to="/Reception" className={`hover:text-SecondaryColor focus-within:text-SecondaryColor ${isOpen ? "border-solid border-b-2 border-TextColor/50" : ""}`}>მიღება</CustomLink>   
                    <CustomLink to="/News" className={`hover:text-SecondaryColor focus-within:text-SecondaryColor ${isOpen ? "border-solid border-b-2 border-TextColor/50" : ""}`}>სიახლეები</CustomLink>    
                    <CustomLink to="/OurMerch" className={`hover:text-SecondaryColor focus-within:text-SecondaryColor ${isOpen ? "border-solid border-b-2 border-TextColor/50" : ""}`}>ჩვენი მერჩი</CustomLink>    
                    <CustomLink to="/Contacts" className={`hover:text-SecondaryColor focus-within:text-SecondaryColor ${isOpen ? "border-solid border-b-2 border-TextColor/50" : ""}`}>კონტაკტები</CustomLink>  
                </ul>
                <LinkButton valueText="შემოგვიერთდი" to="/JoinUs"/>
            </div>
            <button className="hidden max-lg:block" onClick={ToggleMenuBtn}>{!isOpen ? <Menu/> : <X/> }</button>
        </nav>
    )
}

