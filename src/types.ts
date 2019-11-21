import { COUNTRY } from "./countries";

export interface Application {
    name: string;
    category: AppCategory;
    city: string;
    country: string;
    totalScore: number;
    subScores: AppScore[];
}

export enum AppCategory {
    FOOD_DELIVERY = 'Food Delivery',
    MOBILITY = 'Mobility'
}

export interface AppScore {
    label: string;
    value: number;
}

export enum SORTING_TYPE {
    TOTAL_SCORE = 'TOTAL_SCORE',
    COUNTRY_SCORE = 'COUNTRY_SCORE',
    CITY_SCORE = 'CITY_SCORE'
}

export interface AppListingsState {
    applications: Application[],
    searchWord?: string,
    sortedBy?: SORTING_TYPE
}