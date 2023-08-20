import { manrope } from "@/shared/config/constants";
import { Section, SubHead } from "@/common/components/Section";
import Image from "next/image";
import { fetchSkills } from "@/shared/utils";
import { toast } from "react-toastify";

enum SkillType {
  LANG = "lang",
  STACK = "stack",
}

interface SkillProps {
  icon: string;
  name: string;
}

const SkillCard = ({ icon, name }: SkillProps) => {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-3 justify-center items-start sm:items-center rounded-xl border-2 border-medium-slate-blue p-3 lg:p-4 m-3 shadow-sm min-w-[7rem] h-28 sm:w-fit sm:h-fit ${manrope.className} break-all`}
    >
      <span className="h-[36px] w-[36px] rounded-lg bg-gray-50">
        <Image src={icon} height={36} width={36} alt={name.toLowerCase()} />
      </span>

      <h2 className="text-sm md:text-base font-semibold">{name}</h2>
    </div>
  );
};

const Skills = async () => {
  const skills = await fetchSkills().then((data) => {
    if (data.code !== 200) {
      toast.error("Failed to fetch data", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    return data.data;
  });

  return (
    <Section
      color="bg-medium-slate-blue"
      title="My Skills"
      content={
        <div className="sm:w-full mt-6">
          <div className="flex flex-row items-center mt-6">
            <SubHead
              dividerColor="bg-medium-slate-blue"
              title="Mobile & Web App Development"
            />
          </div>
          <div className="bg-lavender rounded-tr-3xl rounded-bl-3xl rounded-br-3xl mt-6">
            <div className={`flex flex-wrap gap-1.5 justify-items-center py-3`}>
              {skills
                ?.filter((skill) => skill.category == SkillType.STACK)
                .map((skill) => (
                  <SkillCard
                    key={skill.id}
                    icon={skill.icon}
                    name={skill.name}
                  />
                ))}
            </div>
          </div>
          <div className="flex flex-row items-center mt-12">
            <SubHead
              dividerColor="bg-medium-slate-blue"
              title="Programming Languages"
            />
          </div>
          <div className="bg-lavender rounded-tr-3xl rounded-bl-3xl rounded-br-3xl mt-6">
            <div className={`flex flex-wrap gap-1.5 justify-items-center py-3`}>
              {skills
                ?.filter((skill) => skill.category == SkillType.LANG)
                .map((skill) => (
                  <SkillCard
                    key={skill.id}
                    icon={skill.icon}
                    name={skill.name}
                  />
                ))}
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Skills;
