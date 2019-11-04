import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { Application } from '../../types';
import { Container, Left, Right } from 'native-base';
import { StylingConstants } from "../../constants";

interface Props {
    appInfo: Application;
}

interface State {
    isOpened: boolean;
}

export class ApplicationListing extends React.Component<Props, State> {

    private height = new Animated.Value(StylingConstants.listingHeight.CLOSED);

    constructor(props) {
        super(props);

        this.state = {
            isOpened: false
        }
      }

    render() {
        const { name, category, city, country } = this.props.appInfo;
        return(
            <Animated.View style={[styles.listing, { height: this.height }]}
            onTouchEnd={() => this.toggleHeight()}>
                <Container>
                    <Text style={styles.appName}>{name}</Text>
                    <Text style={styles.appCategory}>{category}</Text>
                    {
                        this.isOpened() && (
                        <View>
                            <Text style={styles.appCity}>City: {city}</Text>
                            <Text style={styles.appCountry}>Country: {country}</Text>
                        </View>
                        )}
                </Container>
            </Animated.View>
        )
    }

    private animateTransition(toValue: number) {
        Animated.spring(this.height, {
          toValue,
          tension: 20
        }).start();
      }

    isOpened() {
        return this.state.isOpened
    }

    toggleHeight() {
        this.state.isOpened
        ? this.closeListing()
        : this.openListing()
    }

    closeListing() {
        this.animateTransition(StylingConstants.listingHeight.CLOSED)
        this.setState({ isOpened: false })
    }

    openListing() {
        this.animateTransition(StylingConstants.listingHeight.OPENED)
        this.setState({ isOpened: true })
    }
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