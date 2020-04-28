import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Card from './Card';
import { Fontisto } from '@expo/vector-icons';
import numeral from 'numeral';

function WorldwideStats(props) {
  const { loading: loadData, data: realData, error } = useQuery(ListingsQuery);

  //  if (realData){
  //   console.log(realData);
  // }
  // if (error){
  //   console.log(error);
  // }
  return (
    <Card style={styles.container}>
      <View style={styles.worldStatsContainer}>
        <Fontisto name="world-o" size={26} color="blue" />
        <Text style={{ marginLeft: 5, fontSize: 17, marginTop: 6 }}>
          Worldwide Statistics
        </Text>
      </View>
      <View style={styles.statsItemsContainer}>
        <View style={styles.statsItems}>
          <Text style={{ color: '#4847d6', fontWeight: '500' }}>Confirmed</Text>
          <Text style={styles.numbers}>
            {numeral(realData?.globalTotal?.cases).format('0,0') || 'N/A'}
          </Text>
        </View>
        <View style={styles.statsItems}>
          <Text style={{ color: '#62975f', fontWeight: '500' }}>Recovered</Text>
          <Text style={styles.numbers}>
            {numeral(realData?.globalTotal?.recovered).format('0,0') || 'N/A'}
          </Text>
        </View>
        <View style={[styles.statsItems, styles.lastItem]}>
          <Text style={{ color: 'tomato', fontWeight: '500' }}>Deaths</Text>
          <Text style={styles.numbers}>
            {numeral(realData?.globalTotal?.deaths).format('0,0') || 'N/A'}
          </Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    marginHorizontal: 10,
  },
  worldStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsItemsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    marginTop: 20,
  },
  statsItems: {
    justifyContent: 'space-between',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    paddingRight: 20,
    paddingHorizontal: 6,
  },
  lastItem: {
    borderRightWidth: 0,
  },
  numbers: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

const ListingsQuery = gql`
query{
  globalTotal {
      affectedCountries
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

`;

const WorldwideWrapper = graphql(ListingsQuery)(WorldwideStats);
export default WorldwideWrapper;