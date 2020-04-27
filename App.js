import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import WorldWideStats from './components/WorldWideStats';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
         <Text style={styles.headerTitle}>{'COVID-19\nWorldwide'}</Text>
      </View>
      <WorldWideStats />
      <View style={styles.selectCountryContainer}>
        <Text style={{fontWeight:'600'}}>Select Country:</Text>
      </View>
    <View>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    paddingTop:Constants.statusBarHeight
  },
  headerContainer:{
    padding:15,
    borderBottomWidth:1,
    borderColor:'grey'
  },
  headerTitle:{
    fontSize:32,
    fontWeight:'bold'
  },
  selectCountryContainer:{
    paddingHorizontal:20
  }
});
