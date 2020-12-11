import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";

const InnerStack = createStackNavigator();

export default function NotesStack() {
	return (
		<InnerStack.Navigator>
			<InnerStack.Screen
				name="Notes"
				component={HomeScreen}
				options={{
					headerTitle: 'Notes App',
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 30
					},
					headerStyle: {
						height: 120,
						backgroundColor: 'orange',
						borderBottomColor: '#ccc',
						borderBottomWidth: 1
					}
				}}
			/>
		</InnerStack.Navigator>
	);
}