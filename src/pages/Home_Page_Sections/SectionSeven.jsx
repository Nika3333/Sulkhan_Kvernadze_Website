import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faXTwitter, faYoutube, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import Addresses from "../../Components/Addresses.jsx";

export default function SectionSeven() {
    return (
        <div className="bg-image-class relative bg-SecondaryColor h-full w-full p-14 max-md:pt-8 max-md:p-4 max-vsm:pt-12 gap-10 flex flex-col justify-around items-center">
            <div className="w-full min-h-3/4 border border-TheeredColor rounded-lg text-TheeredColor flex justify-evenly items-center relative px-5 gap-4 flex-nowrap max-2xl:flex-wrap max-sm:px-3">
                <h2 className="text-4xl max-xl:text-3xl max-md:text-2xl text-center rounded-lg bg-SecondaryColor py-2 absolute top-0 left-2/4 -translate-x-2/4 -translate-y-1/2 text-nowrap px-3 max-vsm:text-wrap"><FontAwesomeIcon icon={faLocationDot} /> ჩვენი დაწესებულებები</h2>
                <div className="w-[470px] h-[370px] my-8 flex justify-center items-center max-2xl:w-4/5 max-2xl:h-[320px] max-lg:h-[280px] max-md:mt-12 max-sm:w-full">
                    <iframe 
                        className="h-full w-full rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1736.7184610018262!2d44.78304843265022!3d41.72952582730701!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472c385569ce9%3A0x21863c157d7788ef!2s11a%20Rafael%20Agladze%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1715753743817!5m2!1sen!2sge" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"/>
                </div>
                

                <div className="flex max-xl:flex-wrap justify-evenly items-center gap-3 w-auto max-2xl:mb-4">
                    <Addresses
                        name={'ფილიალი თბილისი'}
                        adress={"რაფაელ აგლაძის 11ა ქუჩა, თბილისი"}
                        nubmer={"ტელ: 542-48-98-35"}
                        icon={<FontAwesomeIcon icon={faAnglesRight} />}
                        
                    />
                    <Addresses
                        name={'ფილიალი ქუთაისში'}
                        adress={"გალაქტიონ ტაბიძის 13 ქუჩა, ქუთაისი"}
                        nubmer={"ტელ: 584-38-78-47"}
                        icon={<FontAwesomeIcon icon={faAnglesRight} />}
                    />
                    <Addresses
                        name={'ფილიალი ბათუმში'}
                        adress={"შერიფ ხიმშიაშვილის 40 ქუჩა, ბათუმი"}
                        nubmer={"ტელ: 565-14-45-25"}
                        icon={<FontAwesomeIcon icon={faAnglesRight} />}
                    />
                </div>

            </div>
            <div className="w-full min-h-1/4 py-4 bg-TheeredColor rounded-lg text-SecondaryColor flex flex-col justify-between items-center gap-4">
                <h2 className="text-4xl max-xl:text-3xl max-md:text-2xl text-center mb-2">შემოუერთდი ჩვენს სასწავლებელს</h2>
                    <div className="w-full h-full grid place-items-center grid-cols-6 max-[450px]:grid-cols-3 max-[450px]:w-3/4 max-[400px]:w-full gap-3 px-3">
                        <a className="size-14 flex justify-center items-center rounded-full bg-facebook" href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon className="size-5 text-white" icon={faFacebookF}/></a>
                        <a className="size-14 flex justify-center items-center rounded-full bg-Instagram" href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon className="size-5 text-white" icon={faInstagram} /></a>
                        <a className="size-14 flex justify-center items-center rounded-full bg-black" href="https://twitter.com/?lang=en" target="_blank"><FontAwesomeIcon className="size-5 text-white" icon={faXTwitter} /></a>
                        <a className="size-14 flex justify-center items-center rounded-full bg-youtube" href="https://www.youtube.com/" target="_blank"><FontAwesomeIcon className="size-5 text-white" icon={faYoutube} /></a>
                        <a className="size-14 flex justify-center items-center rounded-full bg-linkedIn" href="https://ge.linkedin.com/" target="_blank"><FontAwesomeIcon className="size-5 text-white" icon={faLinkedinIn} /></a>
                        <a className="size-14 flex justify-center items-center rounded-full bg-black" href="https://www.tiktok.com/foryou?lang=en" target="_blank"><FontAwesomeIcon className="size-5 text-white" icon={faTiktok} /></a>
                    </div>
            </div>
        </div>
    )
}