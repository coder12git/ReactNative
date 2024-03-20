import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { Platform } from 'react-native';
import HandlingDataContext from '../context/HandlingDataContext';
import ThemeContext from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/FontAwesome';


const DataVisualization = ({ route }) => {
  const [mealData, setMealData] = useState([]);
  const { formData, resetFormData } = useContext(HandlingDataContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const iconType = (theme === 'dark') ? 'sun-o' : 'moon-o';

  // console.log(formData);

  const apiKey = 'b3ba2760ef4b487eb71e7ff497d868ee' // Spoonacular Food Api Key

  // Stylesheet
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 20,
    },
    chart: {
      flex: 1,
      justifyContent: 'center',
    },
    head: { height: 40, backgroundColor: theme.headColor },
    text: { margin: 6, color: theme.textColor },
  });

  useEffect(() => {
    const ingredients = formData.ingredients;
    const number = formData.number;
    const fetchData = async () => {
      try {
        const generateRecipesByIngredients = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=${number}&apiKey=${apiKey}`);

        if (!generateRecipesByIngredients.ok) {
          throw new Error('Failed to fetch data');
        }

        const recipesData = await generateRecipesByIngredients.json();

        const recipeInfoPromises = recipesData.map(async (recipe) => {
          const recipeInfo = await fetch(
            `https://api.spoonacular.com/recipes/${recipe.id}/nutritionWidget.json?apiKey=${apiKey}`
          );
          const infoData = await recipeInfo.json();
          return {
            ...recipe,
            nutrients: infoData,
          };
        });

        const recipesWithNutrients = await Promise.all(recipeInfoPromises);
        setMealData(recipesWithNutrients);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    resetFormData();
  }, []);
  // console.log(mealData);
  //Taking data from spoonacular food api based on user input
  const data = mealData.map((meal, index) => ({
    'name': meal.title,
    'calories': meal.nutrients.calories,
    'carbs': meal.nutrients.carbs,
    'protein': meal.nutrients.protein,
    'fat': meal.nutrients.fat,
  }));

  // Dummy Data for test purpose
  const dummyData = [
    {
      'name': 'Apple Pie with PB&J Streusel',
      'calories': 100,
      'carbs': 15,
      'protein': 16,
      'fat': 7,
    },
    {
      'name': 'Cranberry Apple Crisp',
      'calories': 120,
      'carbs': 18,
      'protein': 10,
      'fat': 8,
    },
    {
      'name': 'Apricot Glazed Apple Tart',
      'calories': 150,
      'carbs': 20,
      'protein': 12,
      'fat': 9,
    },
    {
      'name': 'Easy & Delish! ~ Apple Crumble',
      'calories': 130,
      'carbs': 16,
      'protein': 11,
      'fat': 6,
    },
    {
      'name': 'Apple Or Peach Strudel',
      'calories': 110,
      'carbs': 14,
      'protein': 9,
      'fat': 5,
    },
    {
      'name': 'Easy Homemade Apple Fritters',
      'calories': 140,
      'carbs': 17,
      'protein': 13,
      'fat': 10,
    },
    {
      'name': 'Apple Cinnamon Blondies',
      'calories': 115,
      'carbs': 12,
      'protein': 8,
      'fat': 6,
    },
    {
      'name': 'Vegan Baked Apples with Oat Crumble',
      'calories': 125,
      'carbs': 14,
      'protein': 10,
      'fat': 7,
    },
    {
      'name': 'Grand Apple and Cinnamon Biscuits',
      'calories': 105,
      'carbs': 13,
      'protein': 7,
      'fat': 4,
    },
    {
      'name': 'Apple Pie',
      'calories': 135,
      'carbs': 16,
      'protein': 11,
      'fat': 8,
    },
  ];

  const dummyTableData = dummyData.map((each) => (
    [
      each.name,
      each.calories,
      each.carbs,
      each.protein,
      each.fat
    ]
  ));

  const tableData = data.map((each) => (
    [
      each.name,
      each.calories,
      each.carbs,
      each.protein,
      each.fat
    ]
  ))


  if (Platform.OS === 'web') {
    const { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } = require('recharts');
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleTheme}>
          <Icon name={iconType} size={24} color={theme.textColor} />
        </TouchableOpacity>
        <LineChart width={600} height={300} data={data.length > 0 ? data : dummyData} style={styles.chart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="calories" stroke="red" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleTheme} style={{ paddingBottom: 10 }}>
          <Icon name={iconType} size={24} color={theme.textColor} />
        </TouchableOpacity>
        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
          <Row
            data={['Name', 'Calories', 'Carbs', 'Protein', 'Fat']}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows
            data={tableData.length > 0 ? tableData : dummyTableData}
            textStyle={styles.text}
          />
        </Table>
      </View>
    </ScrollView>
  )
};


export default DataVisualization;
