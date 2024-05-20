import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UlList( {icon, headerContent, content } ) {
    return (
        <ul className="ul-list flex flex-col gap-2">
            <h3 className="text-center border-b-2 border-b-TheeredColor text-SecondaryColor border-dashed w-fit mx-auto px-3 text-wrap text-base">
                <FontAwesomeIcon icon={icon} /> {headerContent}
            </h3>
            {content}
        </ul>
    )
}