import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';


let data2 = [
  {
    id:1,
    value: 'Banana',
  },
  {
    id:2,
    value: 'Mango',
  },
  {
    id:3,
    value: 'Pear',
  },
];

// Countries and flags
const ItemList = props => {

  return (
    <View style={styles.listContainer}>
      <View style={styles.items}>
       <Image style={{width:40, height:40}} source={{uri : props.countryInfo.flag}} />
        <Text style={{ marginLeft: 5, fontSize: 16 }}>{props.country}</Text>
      </View>
    </View>
  );
};

 function CountryList(props) {

  const {data, visible, cancel } = props

  const info = data.countries
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.centeredView}>
        <TouchableOpacity style={styles.btn} onPress={cancel}>
          <Ionicons name="ios-close" size={30} />
        </TouchableOpacity>
        <FlatList data={info} renderItem={obj => <ItemList {...obj.item} />} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  listContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#c4c4c4',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  btn: {
    margin: 20,
  },
  items: {
    flexDirection: 'row',
    alignItems:'center',
    
  },
});

const CountryQuery = gql `
 query {
  countries {
      country
      countryInfo {
          _id
          lat
          long
          flag
          iso3
          iso2
      }
      continent
      result {
          tests
          cases
          todayCases
          deaths
          todayDeaths
          recovered
          active
          critical
          casesPerOneMillion
          deathsPerOneMillion
          testsPerOneMillion
          updated
      }
  }
}


`

const CountryListWrapper = graphql(CountryQuery)(CountryList)
export default  CountryListWrapper;