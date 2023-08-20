"use client";

import { Section } from "@/common/components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendar,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { fetchEducations, fetchExperiences } from "@/shared/utils";
import { EducationsResponse, ExperiencesResponse } from "@/shared/config/types";
import { toast } from "react-toastify";

enum JourneyType {
  EDU,
  EXP,
}

interface JourneyProps {
  id?: string;
  year: string;
  institution: string;
  role: string;
  description: string;
  type?: JourneyType;
}

interface ListJourneyProps {
  type?: JourneyType;
  items: JourneyProps[];
}

const StepItem = ({
  year,
  institution,
  role,
  description,
  type,
}: JourneyProps) => {
  return (
    <div
      className={`flex ${
        type == JourneyType.EXP ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="flex flex-col items-center mx-4">
        <div>
          <div className="flex items-center justify-center w-5 h-5 bg-emerald rounded-full" />
        </div>
        <div className="w-px h-full bg-gray-400" />
      </div>
      <div className="w-full flex flex-col items-start pt-1 pb-8 break-words">
        <div className="flex flex-row mb-2">
          <FontAwesomeIcon
            icon={faCalendar}
            className="text-xs md:text-sm text-jade"
          />
          <p className="text-xs md:text-sm font-medium ms-1.5">{year}</p>
        </div>
        <p className="text-base md:text-lg font-bold">{role}</p>
        <p className="text-sm md:text-base font-medium mb-2">{institution}</p>
        <p className="text-xs md:text-sm text-jet text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

const Step = ({ items, type }: ListJourneyProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`w-full sm:w-2/4 bg-lavender ${
        type == JourneyType.EXP ? "rounded-tr-3xl" : "rounded-tl-3xl"
      } rounded-bl-3xl rounded-br-3xl mx-auto mt-6 p-8`}
    >
      <div
        className={`flex pb-6 ${
          type == JourneyType.EXP ? "justify-start" : "justify-end"
        }`}
      >
        <button
          className={`w-fit group flex items-center gap-4 rounded-lg bg-emerald border-2 border-jet text-jet hover:bg-transparent focus:outline-none px-3 py-1`}
          onClick={() => setExpanded(!expanded)}
        >
          <span className={`text-sm font-bold tracking-wide`}>
            {expanded ? "Hide Previous" : "Show Previous"}
          </span>
        </button>
      </div>
      {expanded ? (
        items.map((item) => {
          return (
            <StepItem
              key={item.id}
              year={item.year}
              institution={item.institution}
              role={item.role}
              description={item.description}
              type={type}
            />
          );
        })
      ) : (
        <StepItem
          key={items[0].id}
          year={items[0].year}
          institution={items[0].institution}
          role={items[0].role}
          description={items[0].description}
          type={type}
        />
      )}
    </div>
  );
};

const Journeys = () => {
  const [selectedTab, setSelectedTab] = useState(JourneyType.EXP);
  const [experiences, setExperiences] = useState<ExperiencesResponse[]>();
  const [educations, setEducations] = useState<EducationsResponse[]>();

  useEffect(() => {
    fetchExperiences().then((data) => {
      if (data.code !== 200) {
        toast.error("Failed to fetch data", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      setExperiences(data.data);
    });
    fetchEducations().then((data) => {
      if (data.code !== 200) {
        toast.error("Failed to fetch data", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      setEducations(data.data);
    });
  }, []);

  return (
    <Section
      color="bg-emerald"
      title="My Journey"
      content={
        <div className="flex flex-col w-full mt-16">
          <div className="flex gap-6 justify-center" aria-label="Tabs">
            <button
              className={`inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-md lg:text-lg font-medium ${
                selectedTab == JourneyType.EDU
                  ? "text-gray-500 hover:text-gray-700"
                  : "text-rich-black"
              }`}
              onClick={() => {
                setSelectedTab(JourneyType.EXP);
              }}
            >
              <FontAwesomeIcon icon={faBriefcase} />
              Experience
            </button>
            <button
              className={`inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-md lg:text-lg font-medium ${
                selectedTab == JourneyType.EDU
                  ? "text-rich-black"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => {
                setSelectedTab(JourneyType.EDU);
              }}
            >
              <FontAwesomeIcon icon={faGraduationCap} />
              Education
            </button>
          </div>
          {experiences && educations && (
            <Step
              items={
                selectedTab == JourneyType.EXP
                  ? experiences?.map((exp) => {
                      return {
                        id: exp.id.toString(),
                        year: `${exp.startYear} - ${exp.endYear}`,
                        institution: exp.institution,
                        role: exp.role,
                        description: exp.description,
                        type: selectedTab,
                      } as JourneyProps;
                    })
                  : educations?.map((edu) => {
                      return {
                        id: edu.id.toString(),
                        year: edu.year,
                        institution: edu.institution,
                        role: edu.role,
                        description: edu.description,
                        type: selectedTab,
                      } as JourneyProps;
                    })
              }
              type={selectedTab}
            />
          )}
        </div>
      }
    />
  );
};

export default Journeys;
