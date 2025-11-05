import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState("");
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);

  const calculateHeartRate = (input: string) => {
    setAge(input);
    const inputAge = parseInt(input);
    if (isNaN(inputAge) || inputAge <= 0) {
      setLowerLimit(0);
      setUpperLimit(0);
      return;
    }
    const lower = Math.round((220 - inputAge) * 0.65);
    const upper = Math.round((220 - inputAge) * 0.85);
    setLowerLimit(lower);
    setUpperLimit(upper);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>
      <Text style={styles.label}>Enter your Age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={age}
        onChangeText={calculateHeartRate}
        placeholder="Empty"
      />
      <View style={styles.results}>
        <Text style={styles.resultText}>Lower Limit: {lowerLimit} bpm</Text>
        <Text style={styles.resultText}>Upper Limit: {upperLimit} bpm</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  results: {
  
  },
  resultText: {
    fontSize: 18,
    marginTop: 5,
  },
});
