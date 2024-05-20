import SulkhanKvernadze from "../../../public/images/Sulkhan_Kvernadze.png";
import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <div className="w-full min-h-[900px] flex flex-col items-start gap-8 py-6 px-56 max-2xl:px-36 max-xl:px-28 max-lg:px-20 max-md:px-12 max-md:gap-4 max-sm:px-5">
            <div className="flex flex-col h-[600px] w-full lg:mb-5">
                    <img src={SulkhanKvernadze} alt="სულხან კვერნაძე ახალგაზრდობაში ტაქსაობისას" className="shadow-md shadow-TextColor/50 rounded h-full w-full object-cover" />
                    <em className="text-TextColor/80 mt-1">სულხან კვერნაძე ახალგაზრდობაში ტაქსაობისას</em>
            </div>
            <h1 className="text-4xl max-sm:text-3xl ">გაეცანი სულხან კვერნაძეს!</h1>
            <p className="text-md max-sm:text-sm">
                კაი გამარჯობა, კეთილი იყოს შენი მობრძანება სულხან კვერნაძის სახელობის ჰუმანიტარულ ინსტიტუტში! ჩვენ არ ვგავართ ტიპიურ უნივერსიტეტებს - ჩვენთან მაგრად ისწავლი და გაერთობი კიდეც. 
                ლეგენდარული სულხან კვერნაძე ამბობდა, რომ გართობის დროს უკეთ სწავლობს ადამიანი, ის მართლაი იყო (ალბათ). აქ განათლება არ არის მხოლოდ წიგნები; ეს არის ასევე პრაქტის მირება, სწავლა და რაღათქმაუნდა გართობა. 
                ჩვენი მშვიდი საზოგადოება ძალიან მხარდამჭერია, გაძლევ საშუალებას, ლექციების შემდეგ ტაქსისტად იმუშავო. ჩვენ გვაქვს კომფორტული ადგილები დასასვენებლად, უახლესი საშუალებები და მრავალფეროვანი, 
                მხიარული განწყობა, სადაც ყველა თავს ისე გრძნობს, როგორც საკუთარ სახლში. ჩვენი მასწავლებლები? ისინი უფრო ჰგვანან მენტორებს, აქ რომ გიხელმძღვანელონ და შთააგონონ. აქ სწავლა უფრო ღრმა კონვოს ჰგავს, 
                ვიდრე მოსაწყენ ლექციას. ჩვენ ფოკუსირებული ვართ ინოვაციებსა და კრეატიულობაზე, კურსებით, რომლებიც აღძრავს შენს ცნობისმოყვარეობას და საშუალებას გაძლევთ მოარგო შენს განათლებასა და მიზნებს.
                თუ შენ ეძებ ადგილს, რომ ისწავლო, გაიზარდო და გაატარო გასაოცარი დრო, სულხან კვერნაძის სახელობის ჰუმანიტარული ინსტიტუტი სწორედ ის ადგილია. დაბრუნდი, დაისვენე და მოემზადე საოცარი 
                მოგზაურობისთვის ჩვენთან ერთად. Კეთილი იყოს შენი მობრძანება სულხან კვერნაძეში!
            </p>
            <div className="flex flex-col justify-center gap-2 items-start">
                <h3 className="text-2xl text-SecondaryColor">ხშირად დასმული კითხვები:</h3>
                <div className="flex flex-col gap-2 max-md:gap-4">
                    <a href="#question1" className="text-xl max-md:text-lg text-TheeredColor hover:text-SecondaryColor/70 transition">რამდენია თქვენთან სწავლის გადასახადი?</a>
                    <a href="#question2" className="text-xl max-md:text-lg text-TheeredColor hover:text-SecondaryColor/70 transition">რა სახის დიპლომს იძლევიან სწავლის დამთავრების შემდეგ?</a>
                    <a href="#question3" className="text-xl max-md:text-lg text-TheeredColor hover:text-SecondaryColor/70 transition">როგორ ხდება თქვენთან ჩაბარება?</a>
                    <a href="#question4" className="text-xl max-md:text-lg text-TheeredColor hover:text-SecondaryColor/70 transition">როგორ შემიწყობს უნივერსიტეტი ხელს სწავლასა და მუშაობაში?</a>
                </div>
            </div>
            <div className="flex flex-col gap-8 w-full">
                <div>
                    <h2 id="question1" className="text-3xl max-md:text-2xl text-SecondaryColor mb-2">სწავლის გადასახადი</h2>
                    <p className="w-2/4 text-md max-sm:text-sm max-2xl:w-3/4 max-md:w-10/12 max-vsm:w-full">
                        ჩვენთან სწავლა სრულიად <strong className="text-SecondaryColor">უფასოა!</strong> შენ არ მოგიწევს არაფრის გადახდა რადგან სულხან კვერნაძეში მთავარი ფული არ არის. თუმცა ფულის გარეშე ჩვენი სასწავლებელი დიდხანს ვერ გაქაჩავს, ამიტომ აუციელებლია რაღაც პატარა თანხა მაინც რო გადაიხადო ყოველთვიურად. აქ არ არის საუბარი რამე სერიოზულზე, მხოლოდ სიმბოლური თანხა, რომ არ გავკოტრდეთ.
                    </p>
                </div>
                <div>
                    <h2 id="question2" className="text-3xl max-md:text-2xl text-SecondaryColor mb-2">სწავლის დამთავრების შემდეგ სერთიპიკატი</h2>
                    <p className="w-2/4 text-md max-sm:text-sm max-2xl:w-3/4 max-md:w-10/12 max-vsm:w-full">
                        ჩვენთან სწავლა 4 წელი არ გრძელდება, ჩვენთან მანა მსწავლობ სანამ ამის სურვილი გაქვს (და იხდი). ასევე შენ შეგიძლია ჩვენთან მანამდე ისწავლო, სანამ ჯარში გაწვევის ასაკი არ გაგივა. რაც შეეხება სერთიფიკატს, სულხან კვერნაძეში ჩვენ ვთვლით, რომ ტვინში ცოდნა უფრომ მნიშვნელოვანია ვიდერ ქაღალდზე დაზერილი საბუთი. სწავლა ვისაც არ უნდა ის არც ისწავლის.
                    </p>
                </div>
                <div>
                    <h2 id="question3" className="text-3xl max-md:text-2xl text-SecondaryColor mb-2">სასწავლებელში ჩაბარება</h2>
                    <p className="w-2/4 text-md max-sm:text-sm max-2xl:w-3/4 max-md:w-10/12 max-vsm:w-full">
                        ჩვენთან ჩაბარება ხდება ძალიან მარტივად. არანაირი გასაუბრება. არანაირი ტესტები. არანაირი ჩაწყობა და სხვა სისულელეები. ისმება ლოგიკური კითხვა, აბა როგორ უნდა ჩავაბარო? პასუხი მარტივია, შემოდიხარ უნივერსიტეტში, პოულობ თავისუფალ საწოლს ოთახში, ალაგებ შენ ნივთებს, იხდი სიმბოლურ თანხას. ვსო, სულ ესაა. კარგ სწავლა-განათლებას და გართობას გისურვებ!
                    </p>
                </div>
                <div>
                    <h2 id="question4" className="text-3xl max-md:text-2xl text-SecondaryColor mb-2">მხარდაჭერა ჩვენგან</h2>
                    <p className="w-2/4 text-md max-sm:text-sm max-2xl:w-3/4 max-md:w-10/12 max-vsm:w-full">
                        სულხან კვერნაძის ჰუმანიტარული ინსტიტუტი გთავაზობს ხარისხიან განათლებას, იმას, რაც ცხოვრებაში გამოგადგება. არა უაზრო თეორია, არამედ გამოსადეგი პრაქტიკა. ასევე ლექციების შემდეგ, თავისუფალ დროს შეგიძლია ტაქსაობაც დაიწყო, რომ ცოტა თანხა გამოიმუშავო. ჩვენ უფლებას გრთავთ გამოიყენო ფრაზა: "სახლში 2 დიპლომი მიდევს!". ოღონდ ამ ფრაზის გამოყენებისთვის დამატებითი გადასახადია (იგულისხმება 2 დიპლომის ამობეჭდვის თანხა).
                    </p>
                </div>
            </div>
            <span className="text-TextColor/70 mb-4">დამატებიტი ინფორმაციისთვის შეგიძლიათ ეწვიოთ <Link to={"/Contacts"}><strong><em className="underline underline-offset-2 cursor-pointer text-SecondaryColor">კონტაქტების</em></strong></Link> გვერდს!</span>
        </div>
    )
}