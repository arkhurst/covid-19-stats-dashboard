import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card';
import { Ionicons, Fontisto } from '@expo/vector-icons';

export default function WorldwideStats(){
    return(
        <Card style={styles.container}>
            <View style={styles.worldStatsContainer}>
                <Fontisto name="world-o" size={26} color='blue' />
                <Text style={{marginLeft:5, fontSize:17, marginTop:6}}>Worldwide Statistics</Text>
            </View>
            <View style={styles.statsItemsContainer}>
                <View style={styles.statsItems}>
                    <Text style={{color:'#4847d6', fontWeight:'500'}}>Confirmed</Text>
                    <Text style={styles.numbers}>2,999,9999</Text>
                </View>
                <View style={styles.statsItems}>
                    <Text style={{color:'#62975f',fontWeight:'500'}}>Recovered</Text>
                    <Text style={styles.numbers}>878,999</Text>
                </View>
                <View style={[styles.statsItems, styles.lastItem]}>
                    <Text style={{color:'tomato',fontWeight:'500'}}>Deaths</Text>
                    <Text style={styles.numbers}>206,992</Text>
                </View>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    container:{
        marginVertical:25,
        marginHorizontal:10
    },
    worldStatsContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    statsItemsContainer:{
       flexDirection:'row',
       marginVertical:8,
       marginTop:20
    },
    statsItems:{
        justifyContent:'space-between',
        borderRightWidth:StyleSheet.hairlineWidth,
        borderColor:'grey',
        paddingRight:20,
        paddingHorizontal:6,
    
    },
    lastItem:{
        borderRightWidth:0
    },
    numbers:{
        fontWeight:'bold',
        fontSize:20
    }
});