import {jakartaSans} from "@/constants";
import {SectionProps, SubHeadProps} from "@/types";

const SubHead = ({dividerColor, title}: SubHeadProps) => {
    return (
        <div className="flex flex-row items-center mt-2">
            <div className={`h-[1px] w-8 lg:w-16 ${dividerColor}`}/>
            <p className={`text-base lg:text-xl text-space-cadet font-medium ms-4 ${jakartaSans.className}`}>{title}</p>
        </div>
    );
}

const Section = ({color, title, content}: SectionProps) => {
    return (
        <section id={title.toLowerCase()}>
            <div className="flex flex-col justify-center items-start max-h-fit mt-28">
                <div className="group relative inline-block">
                <span
                    className={`absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-full transition-transform ${color} border-2 border-jet`}/>
                    <span
                        className={`relative inline-block border-2 border-jet rounded-full bg-background-color px-16 py-3 text-xs md:text-sm font-bold uppercase tracking-widest ${jakartaSans.className}`}>{title}</span>
                </div>
                {content}
            </div>
        </section>
    );
}

export {SubHead, Section};