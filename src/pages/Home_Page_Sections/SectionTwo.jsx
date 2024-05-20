import img1 from "../../../public/images/Sector-1/Img-1.png";
import img2 from "../../../public/images/Sector-1/Img-2.png";
import img3 from "../../../public/images/Sector-1/Img-3.png";

export default function SectionTwo() {
    return (
        <div className="h-[700px] w-full px-24 flex items-center justify-center max-lg:px-20 max-md:px-12 max-md:py-6 max-sm:px-5 max-md:flex-col max-vsm:h-[800px]">
                <div className="w-full h-full flex items-center justify-center flex-col gap-4 max-sm:gap-2">
                    <h2 className="text-4xl text-left max-sm:text-2xl w-10/12">რატომ ჩვენ?</h2>
                    <p className="text-base text-left w-10/12 max-sm:text-sm">
                        იმიტო რო მაგარი ტიპები ვართ და საერთოდ ყველას სასწავლებელს ვჯობივართ. აქ ყველა ერთმანეთს თავის ცოდნას უზიარებს და რამე. 
                        ნებისმიერ ფლაყენ ფლოყენ ინსტიტუტის დამთავრებულს აჯობებს ჩვენი ინსტიტუტი ვისაც აქვს გავლილი. აგერაა კიდე ჩვენი სასწავლებლის
                        სურათები თუ სიტყვაზე არ მენდობის, ზოგადად ჩვენ სასწავლებელში ყველა ერთმანეთს სიტყვაზე ენდობა, 
                        მაგია სულხან კვერნაძის ჰუმანიტარული ინსტიტუტის პეწი. მასწავლებლები კიდე მაღალი კვალიფიკაციის არიან, 
                        ყველას ცხოვრებაში აქვს გავლილი რასაც ისინი აქ ასწავლიან. <strong>ჩასქროლე და დაათვალიერე კიდე რას გთავაზობთ!</strong> 
                    </p>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-3/4 h-4/5 relative max-xl:w-4/5 max-lg:w-full max-lg:h-2/3 max-md:w-3/5 max-md:h-full max-sm:w-3/4 max-vsm:w-10/12 max-vsm:h-5/6">
                        <img src={img1} alt="Image_1" className="rounded-lg shadow-lg shadow-TextColor/50 h-64 max-2xl:h-60 max-xl:h-52 max-lg:h-44 max-md:h-40 max-vsm:h-28 absolute left-0 top-0"></img>
                        <img src={img2} alt="Image_2" className="rounded-lg shadow-lg shadow-TextColor/50 h-64 max-2xl:h-60 max-xl:h-52 max-lg:h-44 max-md:h-40 max-vsm:h-28 absolute right-0 top-2/4 -translate-y-2/4"></img>
                        <img src={img3} alt="Image_3" className="rounded-lg shadow-lg shadow-TextColor/50 h-64 max-2xl:h-60 max-xl:h-52 max-lg:h-44 max-md:h-40 max-vsm:h-28 absolute left-0 bottom-0"></img>
                    </div>
                </div>
        </div>
    )
}