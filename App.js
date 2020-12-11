import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';
import { Ionicons, AntDesign, FontAwesome5, Foundation } from '@expo/vector-icons';
import AddScreen from "./screens/AddScreen";
import HomeScreen from "./screens/HomeScreen";
import NotesStack from "./screens/NotesStack";

const db = SQLite.openDatabase('notes.db');



const Stack = createStackNavigator();

export default function App() {
	return (
		//     <NavigationContainer>
		//       <Stack.Navigator>
		//         <Stack.Screen name="Home" component={HomeScreen}
		//     options={{
		//       headerTitle: "Notes App",
		//       headerTitleStyle: {
		//         fontWeight: "bold",
		//         fontSize: 30,
		//       },
		//       headerTintColor:"brown",
		//       headerStyle: {
		//         height: 120,
		//         backgroundColor: "orange",
		//         borderBottomColor: "#ccc",
		//         borderBottomWidth: 1,
		//       },
		//     }}
		// />
		//       </Stack.Navigator>
		//     </NavigationContainer>

		<NavigationContainer>
			<Stack.Navigator mode="modal" headerMode="none">
				<Stack.Screen name="Notes Stack" component={NotesStack} options={{ headerShown: false }} />
				<Stack.Screen name="Add Note" component={AddScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// const InnerStack = createStackNavigator();

// function NotesStack() {
// 	return (
// 		<InnerStack.Navigator>
// 			<InnerStack.Screen
// 				name="Notes"
// 				component={HomeScreen}
// 				options={{
// 					headerTitle: 'Notes App',
// 					headerTitleStyle: {
// 						fontWeight: 'bold',
// 						fontSize: 30
// 					},
// 					headerStyle: {
// 						height: 120,
// 						backgroundColor: 'yellow',
// 						borderBottomColor: '#ccc',
// 						borderBottomWidth: 1
// 					}
// 				}}
// 			/>
// 		</InnerStack.Navigator>
// 	);
// }



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'papayawhip',
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerIcon: {
		color: 'brown',
		marginRight: 20
	},
	renderFlatlist: {
		padding: 10,
		paddingTop: 20,
		paddingBottom: 20,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1
	},
	flatlist: {
		width: '100%'
	}
});
