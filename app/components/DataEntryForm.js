import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HandlingDataContext from '../context/HandlingDataContext';
import ThemeContext from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/FontAwesome';


const DataEntryForm = () => {
  const { formData, setFormData } = useContext(HandlingDataContext);
  const [isFormValid, setIsFormValid] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const iconType = (theme === 'dark') ? 'sun-o' : 'moon-o';
  const navigation = useNavigation();

  // Stylesheet
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
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
      color: theme.textColor,
    },
    textArea: {
      height: 80,
      borderColor: 'grey',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
      paddingTop: 10,
      color: theme.textColor,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      color: theme.textColor,
    },
    errorText: {
      color: "red",
      marginBottom: 20,
    }
  });


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
    navigation.navigate('Data Visualization');
    // setFormData({ ...formData, ingredients: '', number: '' });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleTheme}>
        <Icon name={iconType} size={24} color={theme.textColor} />
      </TouchableOpacity>
      <View style={styles.form}>
        <Text style={styles.label}>Ingredients</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the ingredient(s) that you have in your fridge.&#10;&#10;Eg- apples,flour,sugar"
          placeholderTextColor={theme.placeholderTextColor}
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
          placeholderTextColor={theme.placeholderTextColor}
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

export default DataEntryForm;
