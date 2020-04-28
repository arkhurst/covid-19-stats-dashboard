import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import WorldWideStats from './components/WorldWideStats';

import DropdownComponent from './components/DropDown';

export default function Main() {
  return (
    <React.Fragment>
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.image}
          source={require('./assets/image.jpg')}>
          <Text style={styles.headerTitle}>{'COVID-19\nWorldwide'}</Text>
        </ImageBackground>
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text
          style={{
            margin: 20,
            fontSize: 21,
            color: 'grey',
            fontWeight: 'bold',
          }}>
          #Covid-19out
        </Text>
        <ScrollView style={{ paddingHorizontal: 20 }} horizontal>
          <View style={styles.supplies}>
            <FontAwesome5 name="handshake" color="white" solid size={45} />
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              {"Don't shake\n     hands"}
            </Text>
          </View>
          <View style={[styles.supplies, styles.mask]}>
            <FontAwesome5
              name="hand-holding-heart"
              color="white"
              solid
              size={45}
            />
            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 10 }}>
              {'Show love'}
            </Text>
          </View>
          <View style={[styles.supplies, styles.alcohol]}>
            <FontAwesome5 name="user-nurse" color="white" solid size={45} />
            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 10 }}>
              {'Talk to a health\n  professional'}
            </Text>
          </View>
        </ScrollView>
        <WorldWideStats />
        <View style={styles.selectCountryContainer}>
          <Text style={{ fontWeight: '600' }}>Select Country:</Text>
        </View>
        <View style={styles.dropDown}>
          <DropdownComponent />
        </View>

        <View style={styles.dateContainer}>
          <Text style={{ color: 'grey' }}>Last Updated:Mon Apr 27 2020</Text>
        </View>
      </ScrollView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 230,
    backgroundColor: 'whitesmoke',
  },
  headerContainer: {
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 270,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingTop: 70,
    color: 'orange',
  },
  supplies: {
    height: 180,
    width: 150,
    backgroundColor: '#4F4DF2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mask: {
    backgroundColor: '#FF3D4F',
    marginLeft: 20,
  },
  alcohol: {
    backgroundColor: '#FFA932',
    marginLeft: 20,
  },
  selectCountryContainer: {
    paddingHorizontal: 20,
  },
  dateContainer: {
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingTop: 10,
    marginBottom: 50,
  },
});