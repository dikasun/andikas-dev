"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SocialButtonProps {
  href: string;
  text: string;
  icon: IconProp;
}

const SocialButton = ({ href, icon, text }: SocialButtonProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.a
      className={`w-fit group flex items-center gap-4 rounded-full bg-raisin-black text-background-color px-4 py-2`}
      href={href}
      layout={true}
      onMouseEnter={() => setIsExpanded(!isExpanded)}
      onMouseLeave={() => setIsExpanded(!isExpanded)}
      transition={{
        layout: {
          duration: 0.5,
          type: "spring",
        },
      }}
    >
      <FontAwesomeIcon icon={icon} className="text-sm md:text-base" />
      {isExpanded && (
        <motion.span
          className={`text-xs leading-[12px] md:text-sm md:leading-[14px] font-medium`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {text}
        </motion.span>
      )}
    </motion.a>
  );
};

const SocialGroup = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-3">
      <SocialButton
        href="mailto:andikas.dev@gmail.com"
        text="Email"
        icon={faEnvelope}
      />
      <SocialButton
        href="https://t.me/rafusr"
        text="Telegram"
        icon={faTelegram}
      />
      <SocialButton
        href="https://linkedin.com/in/andika-sultanrafli"
        text="Linkedin"
        icon={faLinkedin}
      />
      <SocialButton
        href="https://github.com/dikasun"
        text="Github"
        icon={faGithub}
      />
    </div>
  );
};

export { SocialButton, SocialGroup };
