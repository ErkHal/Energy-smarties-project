import { Dimensions, Linking } from 'react-native';

export const StylingConstants = {
    listingHeight: {
        CLOSED: Math.round(Dimensions.get('window').height) / 8,
        OPENED: Math.round(Dimensions.get('window').height) / 2.2
    },
    display: {
        width: Math.round(Dimensions.get('window').width),
        height: Math.round(Dimensions.get('window').height)
    },
    colors: {
        helsinkiBlue: '#0000BF'
    }
}