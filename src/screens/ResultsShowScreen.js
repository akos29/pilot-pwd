/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, FlatList, Image,
} from 'react-native';
import yelp from '../apis/yelp';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
    marginTop: 5,
  },
  container: {
    marginBottom: 5,
  },
  image: {
    height: 200,
    width: 300,
    margin: 15,

  },
});

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {result.name}
        {' '}
      </Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
      />
    </View>
  );
};

export default ResultsShowScreen;
