import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DataEntryForm from './components/DataEntryForm';
import DataVisualization from './components/DataDashboard';
import { HandlingDataProvider } from './context/HandlingDataContext';
import { ThemeProvider } from './context/ThemeContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <HandlingDataProvider>
          <Stack.Navigator initialRouteName="Core Features">
            <Stack.Screen name="Data Entry Form" component={DataEntryForm} />
            <Stack.Screen name="Data Visualization" component={DataVisualization} />
          </Stack.Navigator>
        </HandlingDataProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
