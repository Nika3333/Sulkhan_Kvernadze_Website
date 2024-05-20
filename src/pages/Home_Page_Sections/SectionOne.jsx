import Img1 from "../../../public/images/Slider/Img-1.png";
import Img2 from "../../../public/images/Slider/Img-2.png";
import Img3 from "../../../public/images/Slider/Img-3.png";
import Img4 from "../../../public/images/Slider/Img-4.png";
import Img5 from "../../../public/images/Slider/Img-5.png";
import ImageSlider from "../../ImageSlider";
import LinkButton from "../../Components/LinkButton.jsx";

const IMAGES = [Img1, Img2, Img3, Img4, Img5]

export default function SectionOne() {

    return (
        <div className="h-full aspect-[15/7] max-lg:aspect-auto max-lg:h-[600px] relative">
            <ImageSlider imageUrls={IMAGES}/>
            <h1 className="rounded-md max-[400px]:w-2/3 bg-MainColorLighter lg:py-2 sm:py-1 text-center w-3/5 max-2xl:w-3/4 text-wrap text-4xl max-lg:text-3xl max-sm:text-2xl absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">სულხან კვერნაძის სახელობის ჰუმანიტარული ინსტიტუტი შენ გელოდება!</h1>
            <LinkButton 
                className={"bg-TheeredColor/90 text-center text-2xl py-1 px-2 border-2 max-md:text-xl max-md:py-0 absolute top-2/3 max-[400px]:top-3/4 left-2/4 -translate-x-2/4 -translate-y-2/4 max-[400px]:-translate-y-[30px]"} 
                valueText={"დაკლიკე და ჩაირიცხე."}
                to="/JoinUs"/>
        </div>
    )
}