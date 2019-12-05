import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [num, setNum] = useState(0)

  return (
    <View style={styles.container}>
      <Text>The button has been clicked {num} times.</Text>
      <Button title="Click" onPress={() => setNum(num + 1)} />
      <Button title="reset" onPress={() => setNum(0)} />
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
