import Projects from "@/common/widgets/Projects";
import { jakartaSans } from "@/shared/config/constants";
import { SubHead } from "@/common/components/Section";

export default function Page() {
  return (
    <div>
      <h1
        className={`text-2xl xl:text-4xl text-bittersweet font-bold ${jakartaSans.className}`}
      >
        Hello, I&apos;m <br /> Andika Sultanrafli
      </h1>
      <SubHead dividerColor="bg-bittersweet" title="A Software Engineer" />
      <Projects />
    </div>
  );
}
