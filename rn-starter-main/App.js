import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import FoodDisplay from "./src/screens/FoodDisplay";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Food: FoodDisplay,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Swazi Eats",
    },
  }
);

export default createAppContainer(navigator);
