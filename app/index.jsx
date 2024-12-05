import { StyleSheet, Text, View, FlatList, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import currency from './constants'; // Ensure constants.js exports an object

const CurrencyConvertor = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null); // State for selected item

  const converter = (targetValue) => {
    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const resultantAmount = inputAmount * targetValue.valueInPKR;
      const result = `${targetValue.flag} ${resultantAmount.toFixed(2)} ${targetValue.currencyLogo}`;
      setResultValue(result);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Currency Converter</Text>
      <TextInput
        placeholder="Enter amount in PKR"
        value={inputValue}
        onChangeText={setInputValue}
        keyboardType="number-pad"
        style={styles.input}
      />
      <View style={styles.resultContainer}>
        {resultValue && <Text style={styles.result}>{resultValue}</Text>}
      </View>
      <FlatList
        numColumns={3}
        data={Object.values(currency)} // Convert object to array
        keyExtractor={(item) => item.country} // Use country name as unique key
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.item, selectedItem?.country === item.country && styles.selectedItem]} // Apply selectedItem style
            onPress={() => {
              setSelectedItem(item); // Set the selected item
              converter(item); // Convert currency
            }}
          >
            <Text style={styles.flag}>{item.flag}</Text>
            <Text style={styles.text}>{item.country}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default CurrencyConvertor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  resultContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    paddingHorizontal: 8,
  },
  item: {
    flex: 1,
    margin: 8,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  selectedItem: {
    backgroundColor: '#d3d3d3', // Gray background for selected item
  },
  flag: {
    fontSize: 24,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});
