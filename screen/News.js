import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function(){
    return(
        <View style={styles.container}>
            <Text>Hey there</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingTop:Constants.statusBarHeight
    }
})