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
            <Text>City: {props.appInfo.city}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listing: {
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#505050'
    },
    appName: {
        color: 'black',
        fontSize: 34
    },
    appCategory: {
        color: 'darkgray',
        fontSize: 15
    }
})