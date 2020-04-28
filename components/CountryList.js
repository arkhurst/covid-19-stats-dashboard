import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

// Countries and flags
const ItemList = props => {
  return (
    <View style={styles.listContainer}>
      <TouchableOpacity onPress={props.selected} style={styles.items}>
        <Image
          style={{ width: 40, height: 40, borderRadius: 20 }}
          source={{ uri: props.countryInfo.flag }}
        />
        <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: '600' }}>
          {props.country}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

function CountryList(props) {
  const { data, visible, cancel, select, loading } = props;

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.centeredView}>
        <TouchableOpacity style={styles.btn} onPress={cancel}>
          <Ionicons name="ios-close" size={30} />
        </TouchableOpacity>
        {loading ? (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <View>
            {data && (
              <FlatList
                data={data.countries}
                renderItem={obj => (
                  <ItemList
                    {...obj.item}
                    selected={data => {
                      select(data);
                      cancel();
                    }}
                  />
                )}
                keyExtractor={item => item.id}
              />
            )}
          </View>
        )}
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
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  btn: {
    margin: 20,
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CountryList;