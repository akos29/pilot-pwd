import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from './ResultsList';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginHorizontal: 15,
  },
});

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [searchApi, results, errorMsg] = useResults();
  const filterResultsByPrice = (price) => results.filter((result) => result.price === price);

  return (
    <>
      <SearchBar
        query={query}
        onQueryChange={(newQuery) => setQuery(newQuery)}
        onQuerySubmit={() => searchApi(query)}
      />
      {errorMsg ? <Text style={styles.text}>{errorMsg}</Text> : null}
      <Text style={styles.text}>
        We have found
        {results.length}
        {' '}
        results
      </Text>
      <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
    </>
  );
};

export default SearchScreen;
