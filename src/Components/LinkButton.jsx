import { Link } from "react-router-dom";

export default function LinkButton({valueText, to, className, onMouseEnter, ...props}) {
    return (
        <Link onMouseEnter={onMouseEnter} to={to} className={`border-solid border-2 text-nowrap border-SecondaryColor rounded-full py-1 px-2 hover:bg-TheeredColor/30 focus-within:bg-TheeredColor/30 focus-within:text-SecondaryColor hover:text-SecondaryColor transition ${className}`} {...props}>{valueText}</Link>
    )
}

