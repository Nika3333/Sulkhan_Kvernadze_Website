import MajorCard from "../../Components/MajorCard.jsx";
import Buisness from "../../../public/images/Majors/Buisness.png";
import Cook from "../../../public/images/Majors/Cook.png";
import Doctor from "../../../public/images/Majors/Doctor.png";
import Math from "../../../public/images/Majors/Math.png";
import Musican from "../../../public/images/Majors/Musican.png";
import Statistics from "../../../public/images/Majors/Statistics.png";
import Taxi from "../../../public/images/Majors/Taxi.png";
import Veterinarian from "../../../public/images/Majors/Veterinarian.png";
import LinkButton from "../../Components/LinkButton.jsx";

export default function SectionFour() {

    return (
        <div className="w-full min-h-[850px] flex justify-center items-center py-4 px-24 max-lg:px-20 max-md:px-12 max-md:py-6 max-sm:px-5">
            <div className="w-full h-full text-center flex justify-center gap-4 flex-col items-center relative">
                <h2 className="text-4xl mb-2 text-SecondaryColor">ჩვენთან შეისწავლით:</h2>
                <div className="w-[1280px] grid grid-cols-4 place-items-center gap-4 max-2xl:grid-cols-3 max-2xl:w-[1024px] max-xl:grid-cols-2 max-xl:w-auto max-sm:grid-cols-1">
                    <MajorCard src={Statistics} header={"სტატისტიკა"} content={"აქ ჩვენც არ ვიცით რა ხდება და შენ რა უნდა გასწავლოთ, სხვა რამე აირჩიე შენ კიდე რა, ვაჰ."}/>
                    <MajorCard src={Cook} header={"მზარეული"} content={"მზარეულობა გამოსადეგი ცოდნაა, თუ მოგშივდება კვერცხს მაინც შეიწვავ ბოლოს და ბოლოს."}/>
                    <MajorCard src={Musican} header={"დამკვრელი"} content={"აი ხომ გაგიგია დამკვრელებმა დაუკრანო, საიდან იციან მაგათ დაკვრა? ჰო და მაგას ისწავლი აქანა."}/>
                    <MajorCard src={Veterinarian} header={"ზოოვეტი"} content={"თუ ნამდვილ უნივერსიტეტში ქულები არ გეყო ჩასაბარებლად ზოოვეტზეც კი, აქ სულ უფასოდ შეგიძლია აირჩიო ეგ."}/>
                    <MajorCard src={Math} header={"მათემატიკა"} content={"აქ თქვენ გაიგებთ რომ 35,000,000 და 100,000 შორის არც ისე დიდი განსხვავებაა, ეს ხომ მხოლოც ციფრებია."}/>
                    <MajorCard src={Buisness} header={"ბიზნესი"} content={"გამოიმუშავე ფული და გახდი დამოუკიდებელი, იქნებ მშობლების სარდაფიდანაც მოახერხო გადასვლა."}/>
                    <MajorCard src={Doctor} header={"დოქტორი"} content={"ამ კურსწე ყველაზე საინტერესოა, რადგანჰ დოკტორის ცხოვრება თავგადასავლებით სავსეა."}/>
                    <MajorCard src={Taxi} header={"ტაქსისტი"} content={"თუ გგნონია რომ ფერარის პილოტსა და ქართველ ტაქსის მძღოლს შორის დიდი განსხვავებაა ძალიან ცდები."}/>
                </div>
                <LinkButton valueText={"მეტის ნახვა"} to={"/SubjectsEdu"} className={"mt-2 text-SecondaryColor"}/>
            </div>
        </div>
    )
}