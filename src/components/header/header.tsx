import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Header extends React.Component {
    
    render() {
        return (
            <View style={styles.header}>
              <Text style={styles.appTitle}>Greener Apps</Text>
            </View>
          );
    }
  }

  const styles = StyleSheet.create({
      header: {
          backgroundColor: '#FFF',
          width: '100%',
          height: 200,
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          borderBottomColor: '#000',
          borderBottomWidth: 2
      },
      appTitle: {
          textAlign: 'center',
          color: '#00FF00',
          fontSize: 50
      }
  })