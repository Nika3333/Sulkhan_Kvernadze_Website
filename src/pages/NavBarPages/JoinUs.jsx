import { Link } from "react-router-dom";

export default function JoinUs() {
    return (
        <div className="min-h-[900px] flex justify-center items-center">
            <div className="gap-8  w-auto flex flex-col justify-center items-center bg-TheeredColor md:rounded-lg md:my-8 p-6 max-md:w-full max-md:h-full ">
            <div className="flex flex-col gap-2 text-center max-vsm:gap-0">
                <h1 className="text-4xl text-SecondaryColor max-vsm:text-3xl">შემოგვერთდი!</h1>
                <h3 className="text-xl text-SecondaryColor/50 max-vsm:text-lg">შეავსე ქვემოთ მოცემული ფორმა</h3>
            </div>

                <form action="post" className="flex flex-col gap-4 vsm:border-2 vsm:border-SecondaryColor vsm:p-8 vsm:rounded-lg md:border-none md:p-0">
                    <label className="flex justify-center items-center gap-4 flex-wrap">
                        <div className="flex flex-col max-md:w-full">
                            <label className="text-SecondaryColorDarker/70" htmlFor="firstName">სახელი:</label>
                            <input type="text" name="firstName" placeholder="მიუთითეთ სახელი" className="rounded border-2 border-SecondaryColor/80 p-3 mt-1" />
                        </div>
                        <div className="flex flex-col max-md:w-full">
                            <label className="text-SecondaryColorDarker/70" htmlFor="lastName">გვარი:</label>
                            <input type="text" name="lastName" placeholder="მიუთითეთ გვარი" className="rounded border-2 border-SecondaryColor/80 p-3 mt-1" />
                        </div>
                    </label>

                    <label className="flex justify-center items-center  gap-4 flex-wrap">
                        <div className="flex flex-col max-md:w-full">
                            <label className="text-SecondaryColorDarker/70" htmlFor="email">ელ. ფოსტა:</label>
                            <input type="email" name="email" placeholder="მიუთითეთ ელ. ფოსტა" className="rounded border-2 border-SecondaryColor/80 p-3 mt-1"/>
                        </div>
                        <div className="flex flex-col max-md:w-full">
                            <label className="text-SecondaryColorDarker/70" htmlFor="phoneNumber">ტელ. ნომერი:</label>
                            <input type="text" name="phoneNumber" placeholder="მიუთითეთ ტელ. ნომერი" className="rounded border-2 border-SecondaryColor/80 p-3 mt-1"/>
                        </div>
                    </label>

                    <label className="flex w-full items-center gap-4 flex-wrap">
                        <span className="text-nowrap text-SecondaryColorDarker/70">აირჩიეთ სქესი:</span>
                            <div>
                                <input type="radio" name="genderSelector" className="mr-1"/>
                                <label htmlFor="genderSelector">კაცი</label>
                            </div>
                            <div>
                                <input type="radio" name="genderSelector" className="mr-1"/>
                                <label htmlFor="genderSelector">ქალი</label>
                            </div>
                    </label>

                    <label className="flex flex-col flex-wrap">
                        <label className="text-SecondaryColorDarker/70" htmlFor="birthdayDate">დაბადების თარიღი:</label>
                        <input type="date" name="birthdayDate" className="rounded border-2 border-SecondaryColor/80 p-3 mt-1" />
                    </label>

                    <label className="flex flex-col gap-5 flex-wrap">
                        <div className="flex flex-col">
                            <span className="text-SecondaryColorDarker/70">მისამართი</span>
                            <input type="text" name="street" placeholder="შეიქყვანეთ საცხოვრებელი მისამართი" className="rounded border-2 border-SecondaryColor/80 p-3 mt-1"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-SecondaryColorDarker/70" htmlFor="street">ქუჩა:</label>
                            <select name="city" className="rounded border-2 border-SecondaryColor/80 p-3 mt-1">
                                <option value="tbilisi">თბილისი</option>
                                <option value="qutaisi">ქუთაისი</option>
                                <option value="batumi">ბათუმი</option>
                                <option value="other">სხვა</option>
                            </select>
                        </div>
                    </label>
                    
                    {/* <input type="submit" value="გაგზავნა!" className="cursor-pointer bg-SecondaryColor/10 text-SecondaryColor border-2 border-SecondaryColor hover:bg-SecondaryColor/25 transition w-min mx-auto py-2 px-5 rounded-full" /> */}
                    <Link to={"/"} className="cursor-pointer bg-SecondaryColor/10 text-SecondaryColor border-2 border-SecondaryColor hover:bg-SecondaryColor/25 transition w-min mx-auto py-2 px-5 rounded-full">გაგზავნა!</Link>
                </form>

            </div>
        </div>
    )
}