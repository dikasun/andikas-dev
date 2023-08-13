import {HTMLInputTypeAttribute, JSX} from "react";
import {JourneyType} from "@/utils";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface ImageLoaderProps {
    src: string
}

export interface TextFieldProps {
    id: string,
    title: string,
    type: HTMLInputTypeAttribute,
    placeholder: string
}

export interface ButtonProps {
    href: string,
    text: string,
    idleColor?: string,
    focusColor?: string,
    idleBorderColor?: string,
    idleBgColor?: string,
    focusBgColor?: string,
    idleTextColor?: string,
    focusTextColor?: string,
    icon: ((iconClass: string) => JSX.Element) | null
}

export interface SocialButtonProps {
    href: string,
    text: string,
    icon: IconProp
}

export interface SubHeadProps {
    dividerColor: string,
    title: string
}

export interface SectionProps {
    color: string,
    title: string,
    content: JSX.Element
}

export interface SkillProps {
    icon: string,
    name: string
}

export interface JourneyProps {
    year: string,
    institution: string,
    role: string,
    description: string,
    type?: JourneyType
}

export interface ProjectProps {
    image: string,
    platform: string,
    name: string,
    description: string
}

export interface ProjectDetailProps {
    image: string,
    platform: string,
    name: string,
    description: string,
    url: string
}

export interface JourneyDetailProps {
    id: string,
    year: string,
    institution: string,
    role: string,
    description: string
}

export interface ListJourneyProps {
    type?: JourneyType,
    items: JourneyDetailProps[],
}