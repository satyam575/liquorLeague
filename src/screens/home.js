import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, FlatList,Pressable ,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import UserItem from '../components/userItem';

function HomeScreen({ navigation }) {
  
    const [player, onChangePlayer] = useState('');
    const [playersArray, onChangePlayersArray] = useState([]);

    const removePlayerFromArray = (playerToRemove)=>{
        onChangePlayersArray(playersArray.filter((item) => item != playerToRemove))
    }

    return (
      <View style={styles.container}>
        <View style = {{height:100,marginTop:30}}> 
            <Text style = {{fontSize : 30, color:"#00796B",fontWeight:"bold"}}>Liquor League</Text>
        </View>
        <ScrollView>
        <FlatList style = {styles.list}
          horizontal  
          data ={playersArray}
          contentContainerStyle={styles.listContents}
          renderItem={({item})=>
                <UserItem item={item} removePlayer = {removePlayerFromArray}></UserItem>
        }
          keyExtractor={item => item.name}
        >
        </FlatList>
        </ScrollView>
        
        <View style ={styles.inputContainer}>
            <TextInput
            style={styles.input}
            onChangeText={onChangePlayer}
            value={player}
            placeholder="Add Player"
            autoFocus={true}
            onSubmitEditing = {()=>{onChangePlayersArray(arr => [...arr,{"name":player}]) ; onChangePlayer("") ;}}
            />
            <Ionicons name="add-circle" size={30} color="#00796B" onPress={()=>{onChangePlayersArray(arr => [...arr,{"name":player}]) ; onChangePlayer("") ;}}/>
        </View>
        
        <Pressable style= {styles.GameOn} onPress={()=>{navigation.navigate('GameScreen',{
          "players":playersArray
        })}}>

            <Text style={styles.GameOnText}>Game On</Text>
        
        </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    inputContainer:{
        minHeight:60,
        width: '90%',
        height: 60,
        maxHeight : 60,
        margin: 12,
        flex:1,
        borderWidth: 2,
        margin:30,
        borderColor:"#00796B",
      borderRadius:7,
      flexDirection:"row",
      alignContent:"center",
        alignItems:"center",
        paddingRight:15
    },
    input: {

      fontWeight: 'bold',
      fontSize:23,
      flex:1,
      padding: 10,
      color:"#00796B",
      
    },
    GameOn: {
        width: '90%',
        minHeight:60,
        height: 60,
        maxHeight : 60,
        margin: 12,
        marginTop:0,
        flex:1,
        borderWidth: 2,
        fontWeight: 'bold',
        fontSize:23,
        borderColor:"#00796B",
        borderRadius:7,
        padding: 10,
        color:"#00796B",
        alignContent:"center",
        alignItems:"center"
      },
      GameOnText: {
        fontWeight: 'bold',
        fontSize:23,
        color:"#00796B",
      },
    container: {
      flex: 1,
      backgroundColor: '#FFEB3B',
      alignItems: 'center',
      justifyContent: 'center',
      padding :30,
      paddingHorizontal:15
    },
    list: {
    //   padding: 10,
      flexDirection: 'column',
      width:"100%",
    //   backgroundColor:"black"
    },
    listContents: {
      flexDirection: 'row',
      width: '100%',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      padding:9
    },
  });

  export default HomeScreen