import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Text>Increment counter</Text>
      <Button title="Increment" onPress={() => setCounter(counter+1)} />
      <Button title="Reset" onPress={() => setCounter(0)} />
    </View>
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
