import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/header/header';
import AppList from './src/components/app-list/AppList';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  //componentDidMount() {
    //Font.loadAsync({
      //'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    //});
  //}
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header/>
        <AppList/>
      </View>
    </Provider>
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
