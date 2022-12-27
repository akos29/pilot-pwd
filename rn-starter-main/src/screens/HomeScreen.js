import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import AddFood from "../components/AddFood";
// import SearchBar from "../components/SearchBar";
import SearchScreen from "./SearchScreen";


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
      setFoods((prevItems) => [{ id: foods.length+1, text }, ...prevItems]);
    }
  };

  return (
  <View>
    <AddFood addFood={addFood}/>
    <SearchScreen />
  </View>
  );    
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
