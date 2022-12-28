/* eslint-disable react/prop-types */
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    fontSize: 33,
    alignSelf: 'center',

  },
});

const SearchBar = ({ query, onQueryChange, onQuerySubmit }) => (
  <View style={styles.backgroundStyle}>
    <AntDesign name="search1" style={styles.iconStyle} color="black" />
    <TextInput
      style={styles.inputStyle}
      placeholder="Search term"
      autoCapitalize="none"
      autoCorrect={false}
      value={query}
      onChangeText={onQueryChange}
      onEndEditing={onQuerySubmit}
    />
  </View>
);

export default SearchBar;
