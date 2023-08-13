import Image from "next/image";
import {imageHeroStyle, jakartaSans} from "@/constants";
import {SubHead} from "@/components/sections/Section";

const Hero = () => {
    return (
        <section id="about">
            <div
                className="mx-auto max-h-fit">
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center justify-items-start lg:justify-items-end">
                    <div className="group relative inline-block lg:order-last">
                    <span
                        className="absolute inset-0 translate-x-2 translate-y-2 bg-maize transition-transform w-[280px] h-[280px] rounded-tl-25 rounded-tr-25 rounded-br-25"/>
                        <span className="relative inline-block">
                        <Image
                            src="andikas_8TxTvsfNY"
                            alt="andikas"
                            width={280}
                            height={280}
                            style={imageHeroStyle}
                        />
                    </span>
                    </div>

                    <div>
                        <h1 className={`text-2xl xl:text-4xl text-bittersweet font-bold ${jakartaSans.className}`}>Hello,
                            I&apos;m <br/> Andika Sultanrafli</h1>
                        <SubHead dividerColor="bg-bittersweet" title="A Software Engineer"/>
                        <p className="text-sm md:text-base text-justify text-jet mt-6">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;