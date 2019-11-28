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
    TOTAL_SCORE = 'total',
    COUNTRY_SCORE = 'country',
    CITY_SCORE = 'city',
    COMPANY_SCORE = 'company',
    ENERGY_SCORE = 'energy'
}

export interface AppListingsState {
    applications: Application[],
    searchWord?: string,
    sortedBy?: SORTING_TYPE,
    loading: boolean,
    failed: boolean
}