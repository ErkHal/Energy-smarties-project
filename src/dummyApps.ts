import { Application, AppCategory } from './types';

export const dummyApps : Application[] = [
    {
        name: 'Wolt',
        category: AppCategory.FOOD_DELIVERY,
        city: 'Helsinki',
        country: 'FIN',
        totalScore: 8.6,
        subScores: [
            {label: 'Energy Score', value: 8.9},
            {label: 'Company Score', value: 7.0},
            {label: 'City Score', value: 7.0},
            {label: 'Country Score', value: 8.4},
        ]
    },
    {
        name: 'Delivery Hero',
        category: AppCategory.FOOD_DELIVERY,
        city: 'Berlin',
        country: 'GER',
        totalScore: 8.1,
        subScores: [
            {label: 'Energy Score', value: 8.9},
            {label: 'Company Score', value: 7.0},
            {label: 'City Score', value: 7.0},
            {label: 'Country Score', value: 8.4},
        ]
    },
    {
        name: 'Foodora',
        category: AppCategory.FOOD_DELIVERY,
        city: 'Berlin',
        country: 'GER',
        totalScore: 7.2,
        subScores: [
            {label: 'Energy Score', value: 8.9},
            {label: 'Company Score', value: 7.0},
            {label: 'City Score', value: 7.0},
            {label: 'Country Score', value: 8.4},
        ]
    },
    {
        name: 'Uber Eats',
        category: AppCategory.FOOD_DELIVERY,
        city: 'San Fransisco',
        country: 'USA',
        totalScore: 6.6,
        subScores: [
            {label: 'Energy Score', value: 8.9},
            {label: 'Company Score', value: 7.0},
            {label: 'City Score', value: 7.0},
            {label: 'Country Score', value: 8.4},
        ]
    }
]