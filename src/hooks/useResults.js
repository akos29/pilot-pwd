import { useState, useEffect } from 'react';
import yelp from '../apis/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const searchApi = async (searchQuery) => {
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchQuery,
          location: 'san jose',
        },
      });
      setResults(res.data.businesses);
    } catch (e) {
      setErrorMsg('Something went wrong');
    }
  };
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMsg];
};
