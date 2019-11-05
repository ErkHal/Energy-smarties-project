export enum COUNTRY_FLAGS {
    FIN = '🇫🇮',
    GER = '🇩🇪',
    USA = '🇺🇸',
}

export enum COUNTRY {
    FIN = 'Finland',
    GER = 'Germany',
    USA = 'USA'
}

export const getCountryName = (country: string) => {
    return COUNTRY[country];
}

export const getFlagEmoji = (countryCode: COUNTRY) => {
    return COUNTRY_FLAGS[countryCode];
}