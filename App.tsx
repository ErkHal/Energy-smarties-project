import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header/header';
import * as Font from 'expo-font';

export default function App() {
  //componentDidMount() {
    //Font.loadAsync({
      //'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    //});
  //}
  return (
    <View style={styles.container}>
      <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
