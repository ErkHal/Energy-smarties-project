import { Dimensions, Linking } from 'react-native';

export const StylingConstants = {
    display: {
        width: Math.round(Dimensions.get('window').width),
        height: Math.round(Dimensions.get('window').height)
    }
}