import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';
import { Ionicons } from "@expo/vector-icons";

const db = SQLite.openDatabase("notes.db")
const Stack = createStackNavigator();

function HomeScreen({navigation}){

  useEffect(() => {
		navigation.setOptions({
			headerRight: () => <Button onPress={addNotes} title="Add" />,
		});
  });
  
  function addNotes(){
    console.log("hell0");
  }

  return(
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );

}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
    options={{
      headerTitle: "Notes App",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 30,
      },
      headerTintColor:"brown",
      headerStyle: {
        height: 120,
        backgroundColor: "orange",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
      },
    }}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'papayawhip',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
