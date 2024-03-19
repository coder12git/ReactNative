import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { StyleSheet, Text, View } from 'react-native';
import DataEntryForm from './components/DataEntryForm';
import DataVisualization from './components/DataDashboard';
import { HandlingDataProvider } from './context/HandlingDataContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HandlingDataProvider>
      <Stack.Navigator initialRouteName="Core Features">
        <Stack.Screen name="Data Entry Form" component={DataEntryForm} />
        <Stack.Screen name="Data Visualization" component={DataVisualization} />
      </Stack.Navigator>
      </HandlingDataProvider>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
