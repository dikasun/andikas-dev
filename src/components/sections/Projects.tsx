import {Section} from "@/components/sections/Section";
import Image from "next/image";
import {jakartaSans} from "@/constants";
import {ProjectProps} from "@/types";
import {SeeMoreProjectsButton} from "@/components/Buttons";

const ProjectIItem = ({image, platform, name, description}: ProjectProps) => {
    return (
        <a href="#" className="w-full group relative block bg-black rounded-3xl my-6">
            <Image
                src={image}
                height={48}
                width={48}
                alt={name.toLowerCase()}
                className="absolute rounded-3xl inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-30"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
                <p className={`w-fit text-xs md:text-sm font-medium tracking-wider bg-turquoise rounded-full text-white py-1 px-3 ${jakartaSans.className}`}>{platform}</p>
                <p className={`text-base md:text-xl font-bold uppercase text-white sm:text-2xl pt-1.5 ${jakartaSans.className}`}>{name}</p>
                <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm text-white">{description}</p>
                    </div>
                </div>
            </div>
        </a>
    );
}

const Projects = () => {
    return (
        <Section color="bg-turquoise" title="My Projects" content={
            <div className="w-full pt-11 sm:p-11">
                <ProjectIItem image={"Screenshot__31_.png"} platform={"Android App"} name={"Comphy"}
                              description={"Comphy Merupakan sebuah wadah komunitas bagi para penggiat dibidang fotografi baik untuk kalangan Profesional, Masyarakat yang sedang memulai belajar fotografi maupun Masyarakat yang mempunyai ketertarikan di bidang fotografi."}/>
                <ProjectIItem image={"Screenshot__31_.png"} platform={"Android App"} name={"Comphy"}
                              description={"Comphy Merupakan sebuah wadah komunitas bagi para penggiat dibidang fotografi baik untuk kalangan Profesional, Masyarakat yang sedang memulai belajar fotografi maupun Masyarakat yang mempunyai ketertarikan di bidang fotografi."}/>
                <div className="flex justify-end">
                    <SeeMoreProjectsButton href={"/"}/>
                </div>
            </div>
        }/>
    );
}

export default Projects;