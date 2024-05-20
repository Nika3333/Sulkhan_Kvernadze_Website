import img1 from "../../public/images/Merch/Cap/Cap_Black.png";
import { Link } from "react-router-dom";

export default function MerchCard({img, alt, name }) {
    return (
        <Link to={"/OurMerch"} className="bg-white min-h-72 w-full rounded-lg shadow-lg shadow-TextColor/15 overflow-hidden flex flex-col justify-start items-center cursor-pointer">
            <img src={img} alt={alt} className="w-full h-60 object-contain bg-MainColorLighter" />
            <div className="flex justify-center items-center">
                <h3 className="text-xl text-SecondaryColor pt-2"><strong>{name}</strong></h3>
            </div>
        </Link>
    )
}