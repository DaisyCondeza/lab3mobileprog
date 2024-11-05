import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Forgotpass = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password?
        <br />No worries, we'll send you reset instructions.</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      
     

<View style={styles.button}>Reset Password</View>

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
    width: '100%',
    backgroundColor: 'green',
    textAlign: 'center',
    padding: '10px',
    color: 'white'

  }

});

export default Forgotpass;
