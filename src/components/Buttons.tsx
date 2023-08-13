import {ButtonProps} from "@/types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faPaperPlane} from "@fortawesome/free-solid-svg-icons";

const FullRoundButton = (
    {
        href,
        text,
        icon,
        idleBorderColor,
        idleBgColor,
        focusBgColor,
        idleTextColor,
        focusTextColor
    }: ButtonProps
) => {
    return (
        <a className={`w-fit group flex items-center gap-4 rounded-full ${idleBgColor} border ${idleBorderColor} ${idleTextColor} hover:${focusBgColor} focus:outline-none px-12 py-2`}
           href={href}>
            <span
                className={`text-sm md:text-base font-medium group-hover:${focusTextColor}`}>{text}</span>
            {icon != null && icon(`text-sm md:text-base ${idleTextColor} group-hover:${focusTextColor}`)}
        </a>
    );
}

const SeeMoreProjectsButton = ({href}: { href: string }) => {
    return (
        <a className={`w-fit group flex items-center gap-4 border-2 border-jet rounded-full bg-turquoise text-jet hover:bg-background-color focus:outline-none px-12 py-2`}
           href={href}>
            <span
                className={`text-sm md:text-base font-medium`}>See More</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-sm md:text-base"/>
        </a>
    );
}

const SendMessageButton = ({href}: { href: string }) => {
    return (
        <a className={`w-fit group flex items-center gap-4 rounded-full bg-sky-blue border-2 border-jet text-jet hover:bg-lavender focus:outline-none px-12 py-2`}
           href={href}>
            <span
                className={`text-sm md:text-base font-medium`}>Send</span>
            <FontAwesomeIcon icon={faPaperPlane}
                             className="text-sm md:text-base"/>
        </a>
    );
}

export {FullRoundButton, SeeMoreProjectsButton, SendMessageButton};