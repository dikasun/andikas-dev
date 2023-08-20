import Image from "next/image";
import { imageHeroStyle, jakartaSans } from "@/shared/config/constants";
import { SubHead } from "@/common/components/Section";
import { fetchProfile } from "@/shared/utils";
import { SocialButton } from "@/common/components/SocialButtons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const Hero = async () => {
  const profile = await fetchProfile().then((data) => {
    if (data.code !== 200) {
      toast.error("Failed to fetch data", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    return data.data;
  });

  return (
    <section id="about">
      {profile && (
        <div className="mx-auto max-h-fit">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-items-start">
            <div className="group relative inline-block lg:order-last lg:justify-self-center">
              <span className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-maize transition-transform w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] rounded-tl-25 rounded-tr-25 rounded-br-25 border-2 border-jet" />
              <span className="relative inline-block w-[250px] h-[250px] sm:w-[280px] sm:h-[280px]">
                <Image
                  src={profile.picture}
                  alt={profile.name.toLowerCase()}
                  width={280}
                  height={280}
                  style={imageHeroStyle}
                  className="border-2 border-jet"
                />
              </span>
            </div>

            <div>
              <h1
                className={`text-2xl xl:text-4xl text-bittersweet font-bold ${jakartaSans.className}`}
              >
                Hello, I&apos;m <br /> {profile.name}
              </h1>
              <SubHead dividerColor="bg-bittersweet" title={profile.role} />
              <p className="text-sm md:text-base text-justify text-jet mt-6">
                {profile.description}
              </p>
              <div className="mt-4">
                <SocialButton href="" text="Resume" icon={faFilePdf} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
