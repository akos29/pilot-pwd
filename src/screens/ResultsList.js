import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import ResultDetail from "./ResultDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({title, results, navigation}) => {
  if(!results.length) {
    return null;
  }

return (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      horizontal
      data={results}
      keyExtractor= {(result) => result.id}
      renderItem= {({item}) => {
        return (
          <TouchableOpacity onPress={()=> navigation.navigate('ResultShow', {id: item.id})}>
            <ResultDetail result={item} />
          </TouchableOpacity>
          )
      }}  />
  </View>
  )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 21,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 5,
    }
})

export default withNavigation(ResultsList);