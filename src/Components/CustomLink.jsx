import { Link } from "react-router-dom";

export default function CustomLink({children, to, className, ...props}) {
    return(
        <li className={'flex items-center justify-center rounded-full py-1 px-2 transition'}>
            <Link to={to} {...props} className={className} >{children}</Link>
        </li>
    )
}