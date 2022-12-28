import React, {useState} from "react";
import { View, Text, StyleSheet,TextInput, TouchableOpacity } from "react-native";
import { FaPlusCircle } from 'react-icons/fa';

const styles = StyleSheet.create({
    input: {
      height: 80,
      padding: 8,
      margin: 5,
      fontSize: 20,
    },
    btn: {
      backgroundColor: '#c2bad8',
      padding: 9,
      margin: 5
    },
    btnText: {
      color: 'darkslateblue',
      fontSize: 27,
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center'
    },
    text: {
      color: 'darkblue',
      fontSize: 27,
      padding: 35,
      textAlign: 'left',
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
    },
  });

const HomeScreen = ({addFood}) => {
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);

  return (
  <View>
    <Text style={styles.text}>Food Delivery</Text>
    <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addFood(text);
          setText('');
        }}
      ><Text style={styles.btnText}>
     
      Add Item
    </Text></TouchableOpacity>
  </View>
  );    
};



export default HomeScreen;
