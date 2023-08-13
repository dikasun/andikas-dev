export enum JourneyType {
    EDU, EXP
}

export const capitalize = (str: string | null = "", lowerRest = false): string | null =>
    str == null ? null : str?.slice(0, 1).toUpperCase() + (lowerRest ? str?.slice(1).toLowerCase() : str?.slice(1));