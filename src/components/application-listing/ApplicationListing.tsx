import React from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity, PixelRatio } from "react-native";
import { Application } from '../../types';
import { Container, Left, Right } from 'native-base';
import { StylingConstants } from "../../constants";
import { getFlagEmoji, getCountryName } from '../../countries';

interface Props {
    appInfo: Application;
}

interface State {
    isOpened: boolean;
}

export class ApplicationListing extends React.Component<Props, State> {

    private getAdaptedOpenedHeight = PixelRatio.get() >= 3.5
    ? StylingConstants.listingHeight.OPENED + StylingConstants.listingHeight.OPENED / 3
    : StylingConstants.listingHeight.OPENED;
    
    private height = new Animated.Value(StylingConstants.listingHeight.CLOSED);

    constructor(props) {
        super(props);

        this.state = {
            isOpened: false
        }
      }

    render() {
        const { name, category, city, country, totalScore, subScores } = this.props.appInfo;

        // Map partial scores and labels
        const partialScores = subScores.map((score) => {
            return(
                <View key={score.label} style={{ marginTop: 10 }}>
                    <Text style={styles.scoreLabel}>{score.label}</Text>
                    <Text style={styles.scoreValue}>{score.value}</Text>
                </View>
            )
        })

        return(
            <TouchableOpacity onPress={() => this.toggleHeight()}>
            <Animated.View style={[styles.listing, { height: this.height }]}>
                <Container>
                    <View style={styles.container}>
                        <Left style={{flexBasis: '70%'}}>
                            <Text style={styles.appName}>{name}</Text>
                            <Text style={styles.appCategory}>{category}</Text>
                        </Left>
                        <Right style={{flexBasis: '30%'}}>
                            <Text style={styles.totalScore}>{totalScore}</Text>
                        </Right>
                    </View>
                    {
                        this.isOpened() && (
                        <Animated.View style={{
                            ...styles.container,
                            opacity: this.height.interpolate({
                                inputRange: [StylingConstants.listingHeight.CLOSED, StylingConstants.listingHeight.OPENED],
                                outputRange: [0, 1],
                                extrapolate: 'clamp'
                            })}}>
                            <Left style={{flexBasis: '50%'}}>
                                <Text style={styles.scoreLabel}>City</Text>
                                <Text style={styles.appCity}>{city}</Text>
                            </Left>
                            <Right style={{flexBasis: '50%'}}>
                                <Text style={{...styles.scoreLabel, textAlign: 'left'}}>Country</Text>
                                <Text style={styles.appCountry}>{getCountryName(country)} {getFlagEmoji(country)}</Text>
                            </Right>
                            <Left style={{
                                flexBasis: '100%',
                                marginTop: 30
                            }}>
                                { partialScores }
                            </Left>
                        </Animated.View>
                    )}
                </Container>
            </Animated.View>
            </TouchableOpacity>
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
        this.animateTransition(this.getAdaptedOpenedHeight)
        this.setState({ isOpened: true })
    }
}

const styles = StyleSheet.create({
    listing: {
        borderBottomWidth: 2,
        borderBottomColor: 'rgb(220, 220, 220)',
        display: 'flex',
        flexDirection: 'column'
    },
    container: {
        marginTop: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    totalScore: {
        fontSize: 30
    },
    appName: {
        color: 'black',
        width: '100%',
        fontSize: 34
    },
    appCategory: {
        color: 'darkgray',
        width: '100%',
        fontSize: 15,
        marginTop: 5
    },
    appCity: {
        fontSize: 20,
        marginTop: 5
    },
    appCountry: {
        fontSize: 20,
        marginTop: 5
    },
    scoreLabel: {
        marginTop: 6,
        fontSize: 15,
        color: '#010101'
    },
    scoreValue: {
        marginTop: 5
    }
})