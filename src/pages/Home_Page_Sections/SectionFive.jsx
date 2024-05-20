import img1 from "../../../public/images/Founders/pfp-1.png";
import img2 from "../../../public/images/Founders/pfp-2.png";
import img3 from "../../../public/images/Founders/pfp-3.png";
import img4 from "../../../public/images/Founders/pfp-4.png";
import img5 from "../../../public/images/Founders/pfp-5.png";
import img6 from "../../../public/images/Founders/pfp-6.png";

import FounderCard from "../../Components/FounderCard.jsx";

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function SectionFive() {

    const imageSrc = [ img1, img2, img3, img4, img5, img6 ]
    const birthDate = [ "02.05.1972", "30.07.1947", "17.10.1972", "13.12.1957", "09.03.1934", "21.04.1926" ]
    const profession = [ "რესლერი", "კულტურისტი", "მუსიკოსი", "მსახიობი", "ასტრონავტი", "დედოფალი" ]
    const names_alts = [ "დუეინ ჯონსონი", "არნოლდ შვარცნეიგერი", "ემინემი", "სტივ ბუშემი", "იური გაგარინი", "ელისაბედ II" ]
    const about = [ 
        "დუეინ ჯონსონი, პროფესიონალი რესლერი, მსახიობი, სიმღერაც უცდია ცოტა ნასვამზე, მაგრამ, მისი ცხოვრების ყველაზე დიდი მიღწევა ისაა, რომ სულხან კვერნაძის სახელობის ჰუმანიტარული ინსტიტუტის ერთ-ერთი დამფუძნებელი გახდა.", 
        "არნოლდის შესახებ ბევრმა იცის, ალბათ შენც გსმენია იმის შესახებ რომ ის ჩვენი დროის ერთ-ერთი ყველაზე მაგარი ტიპის, ტერმინატორის როლს ასრულებს, ის ასევე შვიდგზის მისტერ ოლიმპიაა და სულხან კვერნაძის სახელობის ჰუმანიტარული ინსტიტუტის ერთ-ერთი დამფუძნებელი.", 
        "ემინემი ალბათ ჩვენი დროის საუკეთესო რეპერია, თუმცა იცით როგორ მოხვდა ის სულხან კვერნაძის სახელობის ჰუმანიტარული ინსტიტუტის დამფუძნებლად? იგი სულხან კვერნაძესთან რეპ-ბათლში დამარცხდა, დიახ, ამის შემდეგ ის და სულხანი დამეგობრდნენ, ხოლო მომავალში ის სასწავლებლის ერთ-ერთი დამფუძნებელი გახდა.", 
        "სტი ბუშემი... ნუ რა ვთქვა? კარგი მსახიობია, იუმორშიც მგონი არ უჭირს... აქ როგორ მოხვდა? კარგი შეკითხვაა, ერთ დღეს სტივმა საინფორმაციო კედელზე გაკრული პლაკატი დაინახა სადაც სულხან კვერნაძის სახელობის ჰუმანიტარული ინსტიტუტის შესახებ ეწერა, რომ კაი სასწავლებელია და რამე. სტივსაც საქმე არ ჰქონდა და ასე მოხვდა იგი სულხან კვერნაძეში.", 
        "ერთ დღეს იურიმ გაიღვიძა და გადაწყვიტა, კოსმოსში გაფრენილიყო. აფრენისას მან თავყრილობა დაინახა. ჰოდა მანაც რაკეტა შემოატრიალა და თავყრილობისკენ გაემართა. იქ მან გაიგო სულხან კვერნაძის სახელობის ჰუმანიტარული ინსტიტუტის შესახებ. ეს სასწავლებელი იმდენად მაგარი იყო კოსმოსიდან ჩანდა. ასე მოხვდა იგი სულხან კვერნაძეში სადაც ასტრონავტობაც ისწავლება.", 
        "დედოფალი ელისაბედ II სულხან კვერნაძის პირველი დამფუძნებელი გახლავთ. როგორც ემინემი, იგი პირადად იცნობდა სულხანს, ხოლო წლების შემდეგ სწორად ელისაბედმა დააფნანსა ეს სასწავლებელი. ალბატ გაინტერესებთ საიდან გაიცნო მან სულხანი, ეს გრძელი ისტორიაა... სულხანი რო რეკავდა ნომერი შეეშალა და შემთხვევით დედოფალთან მოხვდა, მათ ისაუბრეს და დამეგობრდენენ." 
    ]

    return (
        <div className="w-full h-[900px] gap-14 py-20 flex flex-col items-center justify-center max-md:py-6 max-xl:gap-10 max-sm:gap-8">
            <h2 className="text-4xl text-center max-sm:text-3xl max-vsm:text-2xl text-SecondaryColor mx-8">აგერ ჩვენი სასწავლებლის დამფუძნებლები:</h2>
            <div className="w-full h-auto flex justify-center items-center">
                    <Swiper
                        slidesPerView={1}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        coverflowEffect={{
                            rotate: 100,
                            stretch: 0,
                            depth: 100,
                            scale: 0.5,
                            modifier: 1.5,
                            slideShadows: false,
                        }}
                        navigation={{
                            nextEl: '.nextBtn',
                            prevEl: '.prevBtn',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Navigation]}
                            className="swiper_container"
                        >

                        <SwiperSlide>
                            <FounderCard src={imageSrc[0]} alt={names_alts[0]} birthDate={birthDate[0]} profession={profession[0]} name={names_alts[0]} about={about[0]}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FounderCard src={imageSrc[1]} alt={names_alts[1]} birthDate={birthDate[1]} profession={profession[1]} name={names_alts[1]} about={about[1]}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FounderCard src={imageSrc[2]} alt={names_alts[2]} birthDate={birthDate[2]} profession={profession[2]} name={names_alts[2]} about={about[2]}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FounderCard src={imageSrc[3]} alt={names_alts[3]} birthDate={birthDate[3]} profession={profession[3]} name={names_alts[3]} about={about[3]}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FounderCard src={imageSrc[4]} alt={names_alts[4]} birthDate={birthDate[4]} profession={profession[4]} name={names_alts[4]} about={about[4]}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FounderCard src={imageSrc[5]} alt={names_alts[5]} birthDate={birthDate[5]} profession={profession[5]} name={names_alts[5]} about={about[5]}/>
                        </SwiperSlide>
                    </Swiper>
            </div>
            <div className="flex justify-center items-center">
                <button className="prevBtn flex justify-center items-center cursor-pointer pr-5 pl-1 py-1 bg-MainColor rounded-s hover:bg-MainColor/60"><ArrowBigLeft className="text-TextColor"/></button>
                <button className="nextBtn flex justify-center items-center cursor-pointer pl-5 pr-1 py-1 bg-MainColor rounded-e hover:bg-MainColor/60"><ArrowBigRight  className="text-TextColor"/></button>
            </div>
        </div>
    )
}