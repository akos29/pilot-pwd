/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
});

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

Header.defaultProps = {
  title: 'Shopping List',
};

export default Header;
