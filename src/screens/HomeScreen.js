import React, { useState } from 'react';
import { View, Alert } from 'react-native';
// import SearchBar from "../components/SearchBar";
import SearchScreen from './SearchScreen';

const HomeScreen = () => {
  const [foods, setFoods] = useState([
    {
      id: 1,
      text: 'Milk',
    },
    {
      id: 2,
      text: 'Eggs',
    },
    {
      id: 3,
      text: 'Bread',
    },
    {
      id: 4,
      text: 'Juice',
    },
  ]);

  const addFood = (text) => {
    if (!text) {
      Alert.alert(
        'No item entered',
        'Please enter an item to be delivered',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        { cancelable: true },
      );
    } else {
      setFoods((prevItems) => [{ id: foods.length + 1, text }, ...prevItems]);
    }
  };

  addFood('lunch');

  return (
    <View>
      <SearchScreen />
    </View>
  );
};

export default HomeScreen;
