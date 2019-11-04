import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Application } from '../../types';

interface Props {
    appInfo: Application;
}

export const ApplicationListing = (props: Props) => {
    return(
        <View style={styles.listing}>
            <Text style={styles.appName}>{props.appInfo.name}</Text>
            <Text style={styles.appCategory}>{props.appInfo.category}</Text>
            <Text style={styles.appCity}>City: {props.appInfo.city}</Text>
            <Text style={styles.appCountry}>Country: {props.appInfo.country}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listing: {
        borderBottomWidth: 1,
        borderBottomColor: '#505050',
        display: 'flex',
        flexDirection: 'column'
    },
    appName: {
        color: 'black',
        width: '100%',
        fontSize: 34
    },
    appCategory: {
        color: 'darkgray',
        width: '100%',
        fontSize: 15
    },
    appCity: {
        marginTop: 15,
        fontSize: 20,
        width: '50%'
    },
    appCountry: {
        width: '50%',
        fontSize: 20,
    }
})