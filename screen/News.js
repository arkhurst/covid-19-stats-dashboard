import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Lottiew from 'lottie-react-native';
import { Info } from '../info/info';
import { FlatList } from 'react-native-gesture-handler';

const ListView = (props) => {
    return(
        <View style={styles.list}>
        <Lottiew source={props.animation} autoPlay loop style={styles.animation} />
        <View>
        <Text style={styles.textTitle}>{props.title}</Text>
        <Text style={styles.text}>
            {props.data}
        </Text>
        </View>
       
     </View>
    )
}

export default function(){
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
               <Text style={styles.headerTitle}>{"Preventive Measures"}</Text>
            </View>
            <FlatList
              data={Info}
              renderItem={(obj) => <ListView {...obj.item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        backgroundColor:'white'
    },
    headerContainer:{
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:'grey',
        padding:15,
        paddingTop:20
    },
    headerTitle:{
        fontSize:22,
        fontWeight:'500'
    },
    list:{
        flexDirection:'row',
        paddingTop:20,
        borderBottomWidth:StyleSheet.hairlineWidth
    },
    animation:{
        height:150,
        width:150
    },
    textTitle:{
        color:'teal',
        fontSize:16,
        fontWeight:'bold'
    },
    text:{
        fontSize:15
    }
})