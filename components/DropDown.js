import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback,Image } from 'react-native';
import Card from './Card';
import { Ionicons } from '@expo/vector-icons';
import {graphql} from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import CountryList from './CountryList';
import CountryStats from './CountryStats';
import countriesJson from "../data/countries.json";

export default function DropdownComponent() {
  const [visible, setVisible] = useState(false);
  const [countries, setCountries] = useState(null);
  const [country, setCountry] = useState({
    country: "Ghana",
    countryInfo: {
      flag: "https://corona.lmao.ninja/assets/img/flags/gh.png",
    },
    result: {
      tests: 100622,
      cases: 1550,
      todayCases: 0,
      deaths: 11,
      todayDeaths: 0,
      recovered: 155,
      active: 1384,
      critical: 4,
      casesPerOneMillion: 50,
      deathsPerOneMillion: 0,
      testsPerOneMillion: 3238,
      updated: "2020-04-27T19:56:41.459Z",
    },
  });
  


  console.log(data)
  const { loading, data } = useQuery(CountryQuery);

  const cancel = () => {
    setVisible(false);
  };
  const openModal = () => {
    setVisible(!visible);
  };

  const handleSelectingCountry = (data) => {
      setCountry(data)
  }
  return (
    <View>
    <TouchableWithoutFeedback onPress={openModal}>
      <View style={{margin:10}}>
        <Card style={styles.container}>
          <View style={styles.countryContainer}>
             <Image
                source={{
                  uri: country.countryInfo.flag,
                }}
                style={{ height: 30, width: 30 }}
                resizeMode={"contain"}
              />
            <Text style={{ marginLeft: 10, marginTop:6, fontWeight: '600' }}>{country?.country || "N/A"}</Text>
          </View>
          <View>
            <Ionicons name="ios-arrow-down" size={18} color="grey" />
          </View>
        </Card>
        <CountryList loading={loading} data={data} select={handleSelectingCountry} visible={visible} cancel={cancel} />
      </View>
    </TouchableWithoutFeedback>
    <CountryStats country={country} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:12
  },
  countryContainer: {
    flexDirection: 'row',
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