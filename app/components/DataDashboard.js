import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DataVisualization = () => {
  const [mealData, setMealData] = useState([]);

  const apiKey = '46245cd3fa4b40088b2c0d217ce7bf8d'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch( `https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKey}`);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setMealData(data.week);
        console.log(mealData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {/* {mealData.map(meal => {
        <Text>{meal.title}</Text>
      })} */}
      <Text>Ingredients</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
  },
});

export default DataVisualization;
