import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { ApplicationListing } from '../application-listing/ApplicationListing';

interface State {
    applicationsList: string[];
}

export default class AppList extends React.Component<{}, State> {

    constructor(props) {
        super(props);

        this.state = {
            applicationsList: ['Wolt', 'Uber Eats', 'Foodora', 'Pizza Online']
        }
      }
    

    render() {

        const appCards = this.state.applicationsList.map((appListing, index) => {
            return (
              <View
                style={{
                  flex: 1,
                  marginVertical: 15,
                  marginHorizontal: 20
                }}
                key={index}>
                <ApplicationListing 
                    appName={this.state.applicationsList[index]}
                    category={'Food Delivery'}/>
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

    mapAppListToViews() {

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