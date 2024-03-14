import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { StyleSheet, Text, View } from 'react-native';
import DataEntryForm from './components/DataEntryForm';
import DataVisualization from './components/DataDashboard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Core Features">
        <Stack.Screen name="DataEntryForm" component={DataEntryForm} />
        <Stack.Screen name="DataVisualization" component={DataVisualization} />
      </Stack.Navigator>
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
