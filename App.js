import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import WorldWideStats from './components/WorldWideStats';
import CountryStats from './components/CountryStats';
import DropdownComponent from './components/DropDown';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{'COVID-19\nWorldwide'}</Text>
      </View>
      <WorldWideStats />
      <View style={styles.selectCountryContainer}>
        <Text style={{ fontWeight: '600' }}>Select Country:</Text>
      </View>
      <View style={styles.dropDown}>
        <DropdownComponent />
      </View>
      <CountryStats />
      <View style={styles.dateContainer}>
        <Text style={{ color: 'grey' }}>Last Updated:Mon Apr 27 2020</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    paddingTop: Constants.statusBarHeight,
  },
  headerContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  selectCountryContainer: {
    paddingHorizontal: 20,
  },
  dateContainer: {
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingTop: 10,
  },
  dropDown: {
    padding: 10,
  },
});