import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function AddScreen({ navigation }) {
	const [ text, setText ] = useState('');

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text style={styles.title}>Add your task.</Text>
			<TextInput style={styles.textInput} value={text} onChangeText={(newText) => setText(newText)} />
			<View style={styles.buttonContainer}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Text  style={styles.dismissButton}>Dismiss</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("Notes", { text })}  >
					<Text style={styles.submitButton}>Submit</Text>
				</TouchableOpacity>
			</View>

			<View>
				<Text style={{ marginTop: 40, color: 'grey' }}>This is what you typed:</Text>
				<Text style={{ color: '#333', marginTop: 10 }}>{text}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		margin: 30
	},
	textInput: {
		padding: 10,
		paddingTop: 20,
		paddingBottom: 20,
		// borderBottomColor: '#ccc',
		// borderBottomWidth: 1,
		// backgroundColor:"red",
		width: 300,
		borderColor: 'orange',
		borderWidth: 2
	},
	buttonContainer: {
		flexDirection: 'row'
    }, 
    submitButton:{
        fontSize:30,
        color:"green",
        margin:30,
        borderWidth:1,
        borderRadius:25,
        padding:20,
    },
    dismissButton:{
        fontSize:30,
        color:"red",
        margin:30,
        borderWidth:1,
        borderRadius:25,
        padding:20,

    }
});
