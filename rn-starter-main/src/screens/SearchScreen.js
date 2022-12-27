import React, { useState } from "react";
import { View,Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from '../apis/yelp';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const res = await yelp.get('/search', {
      params: {
        limit: 50,
        term: query,
        location: 'san jose'
      }
    });
    setResults(res.data.businesses)
  }
  return (
    <View style={styles.backgroundStyle}>
      <SearchBar query={query} 
      onQueryChange={newQuery => setQuery(newQuery)} 
      onQuerySubmit={searchApi} />
      <Text style={styles.text}>We have found {results.length} results</Text>
    </View>
  );    
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});

export default SearchScreen;
