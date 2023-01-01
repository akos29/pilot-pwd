import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FoodDisplay from './src/screens/FoodDisplay';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowDisplay from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Home: SearchScreen,
    Food: FoodDisplay,
    ResultShow: ResultsShowDisplay,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Swazi Eats',
    },
  },
);

export default createAppContainer(navigator);
