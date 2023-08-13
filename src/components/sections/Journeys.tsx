'use client'

import {Section} from "@/components/sections/Section";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faCalendar, faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {JourneyType} from "@/utils";
import {JourneyProps, ListJourneyProps} from "@/types";

const StepItem = ({year, institution, role, description, type}: JourneyProps) => {
    return (
        <div className={`flex ${type == JourneyType.EXP ? "flex-row" : "flex-row-reverse"}`}>
            <div className="flex flex-col items-center mx-4">
                <div>
                    <div className="flex items-center justify-center w-5 h-5 bg-emerald rounded-full"/>
                </div>
                <div className="w-px h-full bg-gray-400"/>
            </div>
            <div className="pt-1 pb-8 break-all">
                <div className="flex flex-row mb-2">
                    <FontAwesomeIcon icon={faCalendar} className="text-xs md:text-sm text-jade"/>
                    <p className="text-xs md:text-sm font-medium ms-1.5">{year}</p>
                </div>
                <p className="text-base md:text-lg font-bold">{role}</p>
                <p className="text-sm md:text-base font-medium mb-2">{institution}</p>
                <p className="text-xs md:text-sm text-jet text-justify">{description}</p>
            </div>
        </div>
    );
}

const Step = ({items, type}: ListJourneyProps) => {
    return (
        <div
            className={`max-w-md bg-lavender ${type == JourneyType.EXP ? "rounded-tr-3xl" : "rounded-tl-3xl"} rounded-bl-3xl rounded-br-3xl mx-auto mt-6 p-8`}>
            {items.map((item) => {
                return <StepItem key={item.id} year={item.year} institution={item.institution} role={item.role}
                                 description={item.description} type={type}/>
            })}
        </div>
    );
};

const Journeys = () => {
    const [selectedTab, setSelectedTab] = useState(JourneyType.EXP)

    return (
        <Section color="bg-emerald" title="My Journey" content={
            <div
                className="flex flex-col w-full mt-16">
                <div className="flex gap-6 justify-center" aria-label="Tabs">
                    <button
                        className={`inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-md lg:text-lg font-medium ${selectedTab == JourneyType.EDU ? 'text-gray-500 hover:text-gray-700' : 'text-rich-black'}`}
                        onClick={() => {
                            setSelectedTab(JourneyType.EXP)
                        }}>
                        <FontAwesomeIcon icon={faBriefcase}/>

                        Experience
                    </button>
                    <button
                        className={`inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-md lg:text-lg font-medium ${selectedTab == JourneyType.EDU ? 'text-rich-black' : 'text-gray-500 hover:text-gray-700'}`}
                        onClick={() => {
                            setSelectedTab(JourneyType.EDU)
                        }}>
                        <FontAwesomeIcon icon={faGraduationCap}/>

                        Education
                    </button>
                </div>
                <Step
                    items={[{
                        id: "1",
                        year: "2022",
                        institution: "IOTANESIA",
                        role: "Mobile Developer",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }, {
                        id: "1",
                        year: "2022",
                        institution: "IOTANESIA",
                        role: "Mobile Developer",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }]}
                    type={selectedTab}
                />
            </div>
        }/>
    );
}

export default Journeys;