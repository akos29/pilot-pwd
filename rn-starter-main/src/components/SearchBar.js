import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ query, onQueryChange, onQuerySubmit }) => {
  return (
  <View style={styles.backgroundStyle}>
    <AntDesign name="search1" style={styles.iconStyle} color="black" />
    <TextInput 
      style={styles.inputStyle} placeholder='Search term' 
      autoCapitalize="none"
      autoCorrect={false}
      value={query} 
      onChangeText={onQueryChange}
      onEndEditing={onQuerySubmit}
    />
  </View>
  );    
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  backgroundStyle: {
    backgroundColor: '#f0eeee',
    height:50,
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  inputStyle: {
    fontSize:18,
    flex: 1,
  },
  iconStyle: {
    fontSize: 33,
    alignSelf: "center",

  }
});

export default SearchBar;
