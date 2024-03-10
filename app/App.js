import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DataEntryForm from './components/DataEntryForm';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <>
    <DataEntryForm/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
