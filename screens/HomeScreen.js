import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { Ionicons, AntDesign, FontAwesome5, Foundation } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from "expo-file-system";

const db = SQLite.openDatabase('notes.db');

export default function HomeScreen({ navigation, route }) {

	const [ notes, setNotes ] = useState([]);
    console.log(FileSystem.documentDirectory);

	function renderItem({ item }) {
		return (
			<View style={styles.renderFlatlist}>
				<Text style={{ textAlign: 'left', fontSize: 16 }}>{item.title}</Text>
                <TouchableOpacity onPress={()=>deleteNotes(item.id)}>
                    <AntDesign name="delete" size={24} color="black" />
                </TouchableOpacity>
			</View>
		);
    }
    
    function refreshNotes() {
        db.transaction((tx) => {
          tx.executeSql(
            "SELECT * FROM notes",
            null,
            (txObj, { rows: { _array } }) => setNotes(_array),
            (txObj, error) => console.log(`Error: ${error}`)
          );
        });
      }

      function deleteNotes(id){
        db.transaction((tx) => {
            tx.executeSql(
              "DELETE FROM notes WHERE id = ?",
            [id],
              (txObj, { rows: { _array } }) => setNotes(_array),
              (txObj, error) => console.log(`Error: ${error}`)
            );
          },
          null,
          refreshNotes);

      }

        // This is to set up the database on first run
  useEffect(() => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS notes
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          done INT)
        `
        );
      },
      null,
      refreshNotes
    );
  }, []);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={addNote}>
					<AntDesign name="addfile" size={40} color="black" style={styles.headerIcon} />
				</TouchableOpacity>
			)
		});
    });

    // Monitor route.params for changes and add items to the database
    useEffect(() => {
        if (route.params?.text) {
          db.transaction(
            (tx) => {
              tx.executeSql("INSERT INTO notes (done, title) VALUES (0, ?)", [
                route.params.text,
              ]);
            },
            null,
            refreshNotes
          );
        }
      }, [route.params?.text]);


	function addNote() {
		navigation.navigate("Add Note");
	}

	return (
		<View style={styles.container}>
			<FlatList style={styles.flatlist} data={notes} renderItem={renderItem} 
        keyExtractor={(item) => item.id.toString()} />
		</View>
	);
}



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
        paddingHorizontal:40,
		paddingBottom: 20,
		borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection:"row",
        justifyContent:"space-between",
	},
	flatlist: {
		width: '100%'
	}
});