import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/header/header';
import AppList from './src/components/app-list/AppList';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <AppList/>
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
