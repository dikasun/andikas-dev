import { Section } from "@/common/components/Section";
import Image from "next/image";
import { jakartaSans } from "@/shared/config/constants";
import { SeeMoreProjectsButton } from "@/common/components/Buttons";

interface ProjectProps {
  image: string;
  platform: string;
  name: string;
  description: string;
}

const ProjectIItem = ({ image, platform, name, description }: ProjectProps) => {
  return (
    <a
      href="#"
      className="w-full group relative block border-2 border-jet bg-black rounded-3xl my-6"
    >
      <Image
        src={image}
        height={48}
        width={48}
        alt={name.toLowerCase()}
        className="absolute rounded-3xl inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-30"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p
          className={`w-fit text-xs md:text-sm font-semibold tracking-wider bg-deep-sky-blue rounded-full text-rich-black py-1 px-4 ${jakartaSans.className}`}
        >
          {platform}
        </p>
        <p
          className={`text-base md:text-xl font-bold uppercase text-white sm:text-2xl pt-1.5 ${jakartaSans.className}`}
        >
          {name}
        </p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

const Projects = ({ limit }: { limit?: number }) => {
  return (
    <Section
      color="bg-deep-sky-blue"
      title="My Projects"
      content={
        <div
          className={`w-full pt-11 sm:p-11 ${
            !limit && "grid grid-cols-1 sm:grid-cols-2 sm:gap-3"
          }`}
        >
          <ProjectIItem
            image={"Screenshot__31_.png"}
            platform={"Android App"}
            name={"Comphy"}
            description={
              "Comphy Merupakan sebuah wadah komunitas bagi para penggiat dibidang fotografi baik untuk kalangan Profesional, Masyarakat yang sedang memulai belajar fotografi maupun Masyarakat yang mempunyai ketertarikan di bidang fotografi."
            }
          />
          <ProjectIItem
            image={"Screenshot__31_.png"}
            platform={"Android App"}
            name={"Comphy"}
            description={
              "Comphy Merupakan sebuah wadah komunitas bagi para penggiat dibidang fotografi baik untuk kalangan Profesional, Masyarakat yang sedang memulai belajar fotografi maupun Masyarakat yang mempunyai ketertarikan di bidang fotografi."
            }
          />
          <ProjectIItem
            image={"Screenshot__31_.png"}
            platform={"Android App"}
            name={"Comphy"}
            description={
              "Comphy Merupakan sebuah wadah komunitas bagi para penggiat dibidang fotografi baik untuk kalangan Profesional, Masyarakat yang sedang memulai belajar fotografi maupun Masyarakat yang mempunyai ketertarikan di bidang fotografi."
            }
          />
          {limit && (
            <div className="flex justify-end">
              <SeeMoreProjectsButton href={"/projects"} />
            </div>
          )}
        </div>
      }
    />
  );
};

export default Projects;
