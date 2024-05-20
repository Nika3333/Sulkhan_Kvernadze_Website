import GraduatingStudent from "../../../public/images/Graduating-Student.png";
import UniversityLogo from "../../../public/images/Uni-Logo-SVG.svg";
import { faGraduationCap, faLightbulb, faSchool } from '@fortawesome/free-solid-svg-icons';
import UlList from "../../Components/UlList.jsx";

export default function SectionThree() {

    const studentsRights = [
        "თავისი აზრის დაფიქსირება;",
        "სწავლის პროცესის დატოვება;",
        "ასევე იყოს მასწავლებელი;",
        "უფასო განათლება;",
        "სწავლის შემდეგ ტაქსაობა."
    ]

    const inovations = [
        "ვირტუალური სწავლება;",
        "არანაირი მაკულატურა;",
        "ჩარიცხვა ულაპარაკოდ;",
        "არანაირი დიპლომი;",
        "ლექცია ნებისმიერ ადგილას."
    ]

    const teachersRights = [
        "აკადემიური თავისუფლება;",
        "ასევე იყოს მოსწავლე;",
        "ასწავლოს სურვილისამებრ;",
        "უსაფრთხო სამუშაო გარემო;",
        "სწავლის შემდეგ ტაქსაობა."
    ]

    const studentsRightsItems = studentsRights.map((student, index) => <li key={index}>{student}</li>)
    const inovationsItems = inovations.map((inovation, index) => <li key={index}>{inovation}</li>)
    const teachersRightsItems = teachersRights.map((teacher, index) => <li key={index}>{teacher}</li>)

    return (
        <div className="bg-TheeredColor w-full min-h-[700px] gap-6 md:py-6 px-24 flex items-center justify-between max-lg:px-20 max-md:px-12 max-md:py-6 max-sm:px-5 max-ml:flex-col-reverse">
            <div className="flex h-[700px] w-3/4 max-lg:w-full justify-center items-center text-center max-ml:h-[575px] max-vsm:h-[500px]">
                <div className="bg-MainColorLighter rounded-lg w-[420px] h-4/5 relative border-4 border-MainColorLighter shadow-lg shadow-TextColor/30 max-ml:h-full max-sm:w-[400px] max-vsm:w-[300px]">
                    <div className="flex justify-between items-center w-full absolute top-0 left-0">
                        <img src={GraduatingStudent} alt="Student" className="h-96 rounded-lg aspect-[5/7] object-cover max-vsm:h-72" />
                        <p className="-rotate-90 h-min right-0 -translate-y-14 absolute max-sm:translate-x-4 max-vsm:-translate-y-8 max-vsm:translate-x-14"><strong className="text-SecondaryColor">8,200+</strong> კურსდამთავრებული</p>
                    </div>
                    <div className="flex justify-between items-center absolute w-full bottom-0">
                        <p className="h-min"><strong className="text-SecondaryColor">4,000+</strong> სტუდენტები</p>
                        <div className="h-[300px] w-[200px] bg-SecondaryColor rounded-lg flex justify-center items-center relative z-10 max-vsm:h-[260px] max-vsm:w-[160px]">
                            <img src={UniversityLogo} alt="Logo" className="h-[150px] max-vsm:h-[100px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center max-vsm:w-full">
                <h2 className="text-4xl text-center mb-8 max-sm:text-2xl max-sm:mb-8 max-vsm:mb-4 text-SecondaryColor">სულხან კვერნაძე თქვენ გთავაზობთ:</h2>
                <div className="flex items-center justify-evenly text-lg w-full text-left gap-6 flex-wrap max-sm:text-sm">
                    <UlList 
                        icon={faGraduationCap} 
                        headerContent={"მოსწავლის უფლებები"} 
                        content={studentsRightsItems}/>

                    <UlList 
                        icon={faLightbulb} 
                        headerContent={"ინოვაციები"} 
                        content={inovationsItems}/>

                    <UlList 
                        icon={faSchool} 
                        headerContent={"მასწავლებლის უფლებები"} 
                        content={teachersRightsItems}/>
                </div>
            </div>
        </div>
    )
}