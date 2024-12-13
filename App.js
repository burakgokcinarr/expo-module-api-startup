import { StyleSheet, Text, View } from 'react-native';

import { Module } from './modules/my-module';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Custom Module Definition</Text>
      <Text>{Module.hello()}</Text>
      <Text>{Module.PI}</Text>
      <Text>{Module.sum(5,8)}</Text>
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
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center'
  }
});
