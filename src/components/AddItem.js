import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { FaPlusCircle } from 'react-icons/fa';

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
    fontSize: '1.27em',
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 27,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});

// eslint-disable-next-line react/prop-types
const AddItem = ({ addItem }) => {
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);
          setText('');
        }}
      >
        <Text style={styles.btnText}>
          <FaPlusCircle name="plus" size={27} style={{ alignItems: 'center', padding: '.5rem' }} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;
