import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import DataVisualization from './DataDashboard';
import { useNavigation } from '@react-navigation/native';

const DataEntryForm = () => {
  const [formData, setFormData] = useState({
    ingredients: '',
    number: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { ingredients, number } = formData;
    const isIngredientsValid = ingredients.trim().length > 0;
    const isNumberValid = Number(number) >= 1 && Number(number) <= 100;

    setIsFormValid(isIngredientsValid && isNumberValid);
  };

  const handleSubmit = () => {
    // console.log('Form data:', formData);
    navigation.navigate('DataVisualization');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Ingredients</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the ingredient(s) that you have in your fridge.&#10;&#10;Eg- apples,flour,sugar"
          numberOfLines={2}
          value={formData.ingredients}
          onChangeText={(text) => handleInputChange('ingredients', text)}
          required={true}
          keyboardType="default"
        />
        <Text style={styles.label}> Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the maximum number of recipes to return (between 1 and 100)."
          numberOfLines={2}
          value={formData.number}
          onChangeText={(text) => {
            handleInputChange('number', text)
          }}
          required={true}
          keyboardType="numeric"
        />
        {/* input validation */}
        {formData.number && (formData.number > 100 || formData.number < 1) && (
          <Text style={styles.errorText}>
            Please enter a number between 1 and 100.
          </Text>
        )}
        <Button title="Submit" onPress={handleSubmit} disabled={!isFormValid} />
        {!isFormValid && (
          <Text style={styles.errorText}>
            Please fill out all required fields.
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFECEC',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 80,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  errorText: {
    color: "red",
    marginBottom: 20,
  }
});

export default DataEntryForm;
