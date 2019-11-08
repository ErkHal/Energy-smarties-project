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