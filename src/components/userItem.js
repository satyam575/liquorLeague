import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const UserItem = (props)=>{
    console.log(props)
    return(
        <View style = {styles.container}>
            <Text style = {{height: 30,fontSize:23,color:"#00796B",textAlign:"center",textAlignVertical:"center",margin:3}}>
                {props.item.name}
            </Text>
            <Entypo name="circle-with-cross" size={24} color="#00796B" onPress={()=>{props.removePlayer(props.item)}}/>          
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        // height: ,
        fontSize:18,
        color:"#00796B",
        borderRadius:9,
        borderWidth:1,
        borderColor:"#00796B",
        alignItems: 'center',
        alignContent:"center",
        justifyContent: 'center',
        padding:3,
        marginRight:3
        
    }

})

export default UserItem;