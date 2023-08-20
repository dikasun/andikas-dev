import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const SeeMoreProjectsButton = ({ href }: { href: string }) => {
  return (
    <a
      className={`w-fit group flex items-center gap-4 border-2 border-jet rounded-xl bg-deep-sky-blue text-jet hover:bg-transparent focus:outline-none px-12 py-2`}
      href={href}
    >
      <span className={`text-sm md:text-base font-semibold`}>See More</span>
      <FontAwesomeIcon icon={faArrowRight} className="text-sm md:text-base" />
    </a>
  );
};

const SendMessageButton = () => {
  return (
    <button
      className={`w-fit group flex items-center gap-4 rounded-xl bg-bittersweet border-2 border-jet text-jet hover:bg-transparent focus:outline-none px-12 py-2`}
      type={"submit"}
    >
      <span className={`text-sm md:text-base font-semibold`}>Send</span>
      <FontAwesomeIcon icon={faPaperPlane} className="text-sm md:text-base" />
    </button>
  );
};

export { SeeMoreProjectsButton, SendMessageButton };
