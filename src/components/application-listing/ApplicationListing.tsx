import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
    appName: string;
    category: string;
}

export const ApplicationListing = (props: Props) => {
    return(
        <View style={styles.listing}>
            <Text style={styles.appName}>{props.appName}</Text>
            <Text style={styles.appCategory}>{props.category}</Text>
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