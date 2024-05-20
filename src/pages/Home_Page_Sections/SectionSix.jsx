import MerchCard from "../../Components/MerchCard.jsx";
import LinkButton from "../../Components/LinkButton.jsx";

import Hoodie from "../../../public/images/Merch/Hoodie/Hoodie_White.png";
import TShirt from "../../../public/images/Merch/T-Shirt/T-Shirts_Orange.png";
import Handbag from "../../../public/images/Merch/Handbag/Handbag_Cyan.png";
import Mug from "../../../public/images/Merch/Mug/Mug_Blue.png";

export default function SectionSix() {

    const productImage = [ Hoodie, TShirt, Handbag, Mug ]
    const productName = [ "ჰუდი", "მაისური", "ხელჩანთა", "ჭიქა"]

    return (
        <div className="min-h-[500px] w-full bg-TheeredColor overflow-hidden flex flex-col justify-evenly items-center max-xl:gap-3 max-xl:justify-center max-xl:py-3">
            <h2 className="text-4xl text-center max-sm:text-3xl max-vsm:text-2xl text-SecondaryColor">ჩვენი მერჩი</h2>
            <div className="grid gap-4 place-items-center mx-4 grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
                <MerchCard img={productImage[0]} alt={productName[0]} name={productName[0]}/>
                <MerchCard img={productImage[1]} alt={productName[1]} name={productName[1]}/>
                <MerchCard img={productImage[2]} alt={productName[2]} name={productName[2]}/>
                <MerchCard img={productImage[3]} alt={productName[3]} name={productName[3]}/>
            </div>
            <LinkButton valueText={"მეტის ნახვა"} to={"/OurMerch"} className={"mt-2 text-SecondaryColor hover:bg-SecondaryColor/15"}/>
        </div>
    )
}