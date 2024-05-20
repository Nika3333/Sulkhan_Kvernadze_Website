import { Link } from "react-router-dom";

export default function Addresses({name, adress, nubmer, icon}) {
    return (
        <div className="max-w-[300px] w-auto p-5 rounded-lg bg-TheeredColor/15">
            <h3 className="text-2xl mb-4"><strong>{name}</strong></h3>
            <p className="text-base">{adress}</p>
            <p className="mb-2">{nubmer}</p>
            <Link to={"/Institutions"} className="border-b border-TheeredColor/50 pb-1 hover:text-TheeredColor/70 hover:border-TheeredColor/30 transition">დამატებითი ინფორმაცია {icon}</Link>
        </div>
    )
}