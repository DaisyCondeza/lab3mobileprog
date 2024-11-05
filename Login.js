import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daisy's Login </Text>


      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
      />

<View style={styles.button}>Login</View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: 'green',
    textAlign: 'center',
    padding: '10px',
    color: 'white'

  }

});

export default Login;
