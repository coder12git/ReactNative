import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';

const DataEntryForm = () => {
  const [formData, setFormData] = useState({
    diets: '',
    targetCalories: '',
    cuisines: '',
    includeIngredients: '',
    excludeIngredients: '',
    preferences: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Form data:', formData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
      <Text style={styles.label}>Diet</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your diet(s) details. Eg-vegetarian"
          value={formData.diets}
          onChangeText={(text) => handleInputChange('diets', text)}
        />
        <Text style={styles.label}>Target Calories</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your target calories"
          value={formData.targetCalories}
          onChangeText={(text) => handleInputChange('targetCalories', text)}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Cuisines</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the cuisine(s) of the recipes. Eg-indian"
          value={formData.cuisines}
          onChangeText={(text) => handleInputChange('cuisines', text)}
        />
        <Text style={styles.label}>Include Ingredients</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Enter the ingredient(s) that should/must be used in the recipes. Eg-tomato,cheese"
          multiline
          value={formData.includeIngredients}
          onChangeText={(text) => handleInputChange('includeIngredients', text)}
        />
        <Text style={styles.label}>Exclude Ingredients</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Enter the ingredients or ingredient types that the recipes must not contain. Eg-eggs"
          multiline
          value={formData.excludeIngredients}
          onChangeText={(text) => handleInputChange('excludeIngredients', text)}
        />
        <Text style={styles.label}>Preferences</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your preference(s). Eg-sweet,spicy"
          value={formData.preferences}
          onChangeText={(text) => handleInputChange('preferences', text)}
        />
        <Button title="Submit" onPress={handleSubmit} />
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
});

export default DataEntryForm;
