import { ApplicationListingInfo, AppCategory } from './types';

export const dummyApps : ApplicationListingInfo[] = [
    {
        name: 'Wolt',
        category: AppCategory.FOOD_DELIVERY,
        city: 'Helsinki',
        country: 'Finland',
        scores: {
            totalScore: 8.6,
            energyScore: 8.9,
            companyScore: 7.0,
            cityScore: 7.0,
            countryScore: 8.4
        }
    },
    {
        name: 'Uber Eats',
        category: AppCategory.FOOD_DELIVERY,
        city: 'Helsinki',
        country: 'Finland',
        scores: {
            totalScore: 8.6,
            energyScore: 8.9,
            companyScore: 7.0,
            cityScore: 7.0,
            countryScore: 8.4
        }
    }
]