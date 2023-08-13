import {manrope} from "@/constants";
import {Section, SubHead} from "@/components/sections/Section";
import {SkillProps} from "@/types";
import Image from "next/image";

const SkillCard = ({icon, name}: SkillProps) => {
    return (
        <div
            className={`block rounded-xl border-2 border-medium-slate-blue p-3 lg:p-4 m-3 shadow-sm min-w-[6rem] h-24 sm:min-w-[7rem] sm:h-28 ${manrope.className} break-all`}>
                    <span className="inline-block rounded-lg bg-gray-50">
                        <Image
                            src={icon}
                            height={36}
                            width={36}
                            alt={name.toLowerCase()}
                        />
                    </span>

            <h2 className="mt-2 text-sm md:text-base font-bold">{name}</h2>
        </div>
    );
}

const Skills = () => {
    return (
        <Section color="bg-medium-slate-blue" title="My Skills" content={
            <div className="sm:w-full mt-6">
                <div className="flex flex-row items-center mt-6">
                    <SubHead dividerColor="bg-medium-slate-blue" title="Mobile & Web App Development"/>
                </div>
                <div className="bg-lavender rounded-tr-3xl rounded-bl-3xl rounded-br-3xl mt-6">
                    <div
                        className={`flex flex-wrap gap-1.5 justify-items-center py-3`}>
                        <SkillCard icon="skills/android.svg" name="Android"/>
                        <SkillCard icon="skills/compose.svg" name="Compose"/>
                        <SkillCard icon="skills/flutter.svg" name="Flutter"/>
                        <SkillCard icon="skills/ktor.svg" name="Ktor"/>
                        <SkillCard icon="skills/nodejs.svg" name="NodeJS"/>
                        <SkillCard icon="skills/express-dark.svg" name="Express"/>
                        <SkillCard icon="skills/react.svg" name="ReactJS"/>
                        <SkillCard icon="skills/nextjs.svg" name="NextJS"/>
                    </div>
                </div>
                <div className="flex flex-row items-center mt-12">
                    <SubHead dividerColor="bg-medium-slate-blue" title="Programming Languages"/>
                </div>
                <div className="bg-lavender rounded-tr-3xl rounded-bl-3xl rounded-br-3xl mt-6">
                    <div
                        className={`flex flex-wrap gap-1.5 justify-items-center py-3`}>
                        <SkillCard icon="skills/java.svg" name="Java"/>
                        <SkillCard icon="skills/kotlin.svg" name="Kotlin"/>
                        <SkillCard icon="skills/dart.svg" name="Dart"/>
                        <SkillCard icon="skills/javascript.svg" name="Javascript"/>
                    </div>
                </div>
            </div>
        }/>
    );
}

export default Skills;