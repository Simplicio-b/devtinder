import React, {Fragment} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Hello word !!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default App;
