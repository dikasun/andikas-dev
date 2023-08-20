import { jakartaSans, manrope } from "@/shared/config/constants";
import { SocialGroup } from "@/common/components/SocialButtons";

const Footer = () => {
  return (
    <div className="flex flex-col w-full items-center bg-lavender rounded-tl-3xl rounded-tr-3xl px-16 py-12 mt-24">
      <a
        href={"/"}
        className={`text-2xl lg:text-3xl text-bittersweet font-bold tracking-wide ${jakartaSans.className}`}
      >
        Andikas
      </a>
      <SocialGroup />
      <p className={`text-sm font-bold ${manrope.className} mt-8`}>
        All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
