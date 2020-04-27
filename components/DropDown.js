import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Card from './Card';
import { Ionicons } from '@expo/vector-icons';
import CountryList from './CountryList';

export default function DropdownComponent() {
  const [visible, setVisible] = useState(false);

  const cancel = () => {
    setVisible(false);
  };
  const openModal = () => {
    setVisible(!visible);
  };
  return (
    <TouchableWithoutFeedback onPress={openModal}>
      <View>
        <Card style={styles.container}>
          <View style={styles.countryContainer}>
            <Text>Icon</Text>
            <Text style={{ marginLeft: 10, fontWeight: '600' }}>Country</Text>
          </View>
          <View>
            <Ionicons name="ios-arrow-down" size={18} color="grey" />
          </View>
        </Card>
        <CountryList visible={visible} cancel={cancel} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countryContainer: {
    flexDirection: 'row',
  },
});