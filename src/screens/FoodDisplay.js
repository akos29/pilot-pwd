/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: 'white',
    fontSize: 27,
    padding: 35,
    textAlign: 'center',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

const FoodDisplay = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

FoodDisplay.defaultProps = {
  title: 'Swazi Eats',
};
export default FoodDisplay;
