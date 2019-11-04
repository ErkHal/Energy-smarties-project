export interface Application {
    name: string;
    category: AppCategory;
    city: string;
    country: string;
    scores: AppScores;
}

export enum AppCategory {
    FOOD_DELIVERY = 'Food Delivery',
    MOBILITY = 'Mobility'
}

export interface AppScores {
    totalScore: number;
    energyScore: number;
    companyScore: number;
    cityScore: number;
    countryScore: number;
}