import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'; 4
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Platform } from 'react-native';

const DataVisualization = ({ route }) => {
  const [mealData, setMealData] = useState([]);
  const { formData } = route.params;
  console.log(formData);

  const apiKey = '46245cd3fa4b40088b2c0d217ce7bf8d'

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
  }, []);
  console.log(mealData);
  // const data = mealData.map((meal, index) => ({
  //   name: meal.title
  //   calories: meal.nutrients.calories,
  //   carbs: meal.nutrients.carbs,
  //   protein: meal.nutrients.protein,
  //   fat: meal.nutrients.fat,
  // }));
  const data = [
    {
      'name': 'bhj', // Assuming meal names are "Meal 1", "Meal 2", ...
      'calories': 100,
      'carbs': 15,
      'protein': 16,
      'fat': 7,

    },
    {
      'name': 'bhj', // Assuming meal names are "Meal 1", "Meal 2", ...
      'calories': 121,
      'carbs': 15,
      'protein': 16,
      'fat': 7,

    },
    {
      'name': 'bhj', // Assuming meal names are "Meal 1", "Meal 2", ...
      'calories': 120,
      'carbs': 15,
      'protein': 16,
      'fat': 7,

    },
  ];
  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
      <LineChart width={600} height={300} data={data} style={styles.chart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="calories" stroke="#8884d8" />
        <Line type="monotone" dataKey="carbs" stroke="red" />
        <Line type="monotone" dataKey="protein" stroke="yellow" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
      </View>
    );
  }
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFECEC',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  chart: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default DataVisualization;
