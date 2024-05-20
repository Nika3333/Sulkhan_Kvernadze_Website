import CustomLink from "./Components/CustomLink.jsx";
import LinkButton from "./Components/LinkButton.jsx";

export default function Footer() {
    return (
        <footer className="flex justify-center items-center flex-col">
            <div className="h-auto py-8 w-full bg-SecondaryColorDarker flex justify-center items-center text-TheeredColor">
                <div className="w-full flex justify-between items-center text-center px-2 text-sm gap-1 max-2xl:justify-center max-2xl:flex-col">
                    <span className="flex-wrap">©2024 ყველა უფლება დაცულია</span>
                    <strong className="max-2xl:hidden text-SecondaryColor">|</strong>
                    <strong className="hidden max-2xl:block text-SecondaryColor">――――――――――</strong>
                    <ul className="flex justify-center items-center text-nowrap flex-wrap max-vsm:flex-col">
                        <CustomLink className={"hover:text-TheeredColor/50 focus-within:text-TheeredColor/50 max-sm:py-1"} to={"/"}>მთავარი</CustomLink>
                        <CustomLink className={"hover:text-TheeredColor/50 focus-within:text-TheeredColor/50 max-sm:py-1"} to={"/AboutUs"}>ჩვენ შესახებ</CustomLink>
                        <CustomLink className={"hover:text-TheeredColor/50 focus-within:text-TheeredColor/50 max-sm:py-1"} to={"/Goals"}>მიზნები</CustomLink>
                        <CustomLink className={"hover:text-TheeredColor/50 focus-within:text-TheeredColor/50 max-sm:py-1"} to={"/SubjectsEdu"}>საგნობრივი განათლება</CustomLink>
                        <CustomLink className={"hover:text-TheeredColor/50 focus-within:text-TheeredColor/50 max-sm:py-1"} to={"/Teachers"}>მასწავლებლები</CustomLink>
                        <CustomLink className={"hover:text-TheeredColor/50 focus-within:text-TheeredColor/50 max-sm:py-1"} to={"/Institutions"}>დაწესებულებები</CustomLink>
                        <CustomLink className={"hover:text-TheeredColor/50 focus-within:text-TheeredColor/50 max-sm:py-1"} to={"/Reception"}>მიღება</CustomLink>
                        <CustomLink className={"hover:text-TheeredColor/50 focus-within:text-TheeredColor/50 max-sm:py-1"} to={"/News"}>სიახლეები</CustomLink>
                        <CustomLink className={"hover:text-TheeredColor/50 focus-within:text-TheeredColor/50 max-sm:py-1"} to={"/OurMerch"}>ჩვენი მერჩი</CustomLink>
                        <CustomLink className={"hover:text-TheeredColor/50 focus-within:text-TheeredColor/50 max-sm:py-1"} to={"/Contacts"}>კონტაკტები</CustomLink>
                        <LinkButton valueText="შემოგვიერთდი" to="/JoinUs" className={"hover:bg-transparent focus-within:bg-transparent focus-within:text-TheeredColor/50 hover:text-TheeredColor/50 border hover:border-SecondaryColor/50 focus-within:border-SecondaryColor/50 max-vsm:mt-1"}/>
                    </ul>
                    <strong className="hidden max-2xl:block text-SecondaryColor">――――――――――</strong>
                    <strong className="max-2xl:hidden text-SecondaryColor">|</strong>
                    <div className="flex-wrap">
                        <strong>ცხელი ხაზი: </strong>
                        <span className="text-nowrap">0322-11-24-24</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}