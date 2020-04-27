import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

let data = [
  {
    value: 'Banana',
  },
  {
    value: 'Mango',
  },
  {
    value: 'Pear',
  },
];

// Countries and flags
const ItemList = props => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.items}>
        <Text>Image</Text>
        <Text style={{ marginLeft: 5, fontSize: 16 }}>{props.value}</Text>
      </View>
    </View>
  );
};

export default function CountryList({ visible, cancel }) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.centeredView}>
        <TouchableOpacity style={styles.btn} onPress={cancel}>
          <Ionicons name="ios-close" size={30} />
        </TouchableOpacity>
        <FlatList data={data} renderItem={obj => <ItemList {...obj.item} />} />
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
  },
});
