/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './app/navigation/navigation';
import { enableScreens } from 'react-native-screens';


import './global.css';


function App() {
    enableScreens();
  return (
    <>
      <RootNavigator />
    </>
  );
}

export default App;
