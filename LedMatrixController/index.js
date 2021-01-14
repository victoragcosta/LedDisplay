import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import { name as appName } from './app.json';
import RootNavigator from './src/navigations/RootNavigator';

AppRegistry.registerComponent(appName, () => RootNavigator);
