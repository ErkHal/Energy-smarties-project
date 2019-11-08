import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { ApplicationListing } from '../application-listing/ApplicationListing';
import { dummyApps } from '../../dummyApps';
import { Application } from "../../types";
import { StylingConstants } from "../../constants";

interface State {
    applicationsList: Application[];
}

export default class AppList extends React.Component<{}, State> {

    constructor(props) {
        super(props);

        this.state = {
            applicationsList: dummyApps
        }
      }
    

    render() {

        const appCards = this.state.applicationsList.map((appListing, index) => {
            return (
              <View
                style={{
                  flex: 1,
                  marginVertical: 20,
                  marginHorizontal: 20
                }}
                key={index}>
                <ApplicationListing 
                    appInfo={this.state.applicationsList[index]}/>
              </View>
            );
          });

        return (
            <ScrollView style={styles.appListings}>
              {
                  appCards
              }
            </ScrollView>
          );
    }
  }

  const styles = StyleSheet.create({
      appListings: {
          backgroundColor: '#FFF',
          width: '100%',
          display: 'flex',
          borderBottomColor: '#000',
          borderBottomWidth: 2
      },
      appTitle: {
          textAlign: 'center',
          color: '#00FF00',
          fontSize: 40
      }
  })