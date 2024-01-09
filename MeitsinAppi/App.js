import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const HeartRateCalculator = () => {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(null);
  const [upperLimit, setUpperLimit] = useState(null);

  const calculateHeartRateLimits = () => {
    if (!age || isNaN(age) || age < 0 || age > 120) {
      alert('Tokko sun pitäs olla haudassa jo :D');
      return;
    }

    const lower = (220 - parseInt(age, 10)) * 0.65;
    const upper = (220 - parseInt(age, 10)) * 0.85;

    setLowerLimit(lower.toFixed(2));
    setUpperLimit(upper.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => setAge(text)}
      />

      <Button title="Calculate" onPress={calculateHeartRateLimits} />

      {lowerLimit !== null && upperLimit !== null && (
        <View>
          <Text style={styles.resultLabel}>Heart Rate Limits for Sports (bpm):</Text>
          <Text>Lower Limit: {lowerLimit}</Text>
          <Text>Upper Limit: {upperLimit}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default HeartRateCalculator;
