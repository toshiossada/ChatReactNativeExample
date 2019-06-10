import {createStackNavigator, createAppContainer} from 'react-navigation';
import Contacts from './src/Contacts';
import Message from './src/Message';

const MainNavigator = createStackNavigator({
  Home: {screen: Contacts},
  Message: {screen: Message},
});

const App = createAppContainer(MainNavigator);

export default App;