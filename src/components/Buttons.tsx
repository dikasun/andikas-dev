import {ButtonProps} from "@/types";

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
        <a className={`w-fit group flex items-center gap-4 rounded-full ${idleBgColor} border ${idleBorderColor} ${idleTextColor} transition-colors hover:${focusBgColor} focus:outline-none focus:ring active:${focusBgColor} px-12 py-2`}
           href={href}>
            <span
                className={`text-sm md:text-base font-medium transition-colors group-hover:${focusTextColor}`}>{text}</span>
            {icon != null && icon(`text-sm md:text-base transition-colors ${idleTextColor} group-hover:${focusTextColor}`)}
        </a>
    );
}

export {FullRoundButton};