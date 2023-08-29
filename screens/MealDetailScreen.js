import { useLayoutEffect } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/MealsList/List';
import MealDetails from '../components/MealDetail/MealDetails';
import { MEALS } from '../data/dummy-data';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
import IngredientItem from '../components/IngredientItem';

const windowWidth = Dimensions.get('window').width;

function MealDetailScreen({ route, navigation }) {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const dispatch = useDispatch();

  const mealId = route.params?.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color='white'
            size={18}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <ScrollView style={{ marginBottom: 40 }}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>

        <MealDetails
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          textStyle={styles.detailTextStyle}
        />
        <View style={{ margin: windowWidth < 360 ? 10 : 16 }}>
          <Subtitle>Ingredients</Subtitle>
        </View>
        {selectedMeal.ingredients.map((ingredient, index) => (
          <IngredientItem key={index} ingredient={ingredient} />
        ))}
        <View style={{ margin: 16 }}>
          <Subtitle>Steps</Subtitle>
        </View>
        <List data={selectedMeal.steps} />
      </ScrollView>
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: windowWidth < 360 ? 180 : 220,
  },
  title: {
    fontWeight: 'bold',
    fontSize: windowWidth < 360 ? 20 : 24,
    margin: 10,
    textAlign: 'center',
    color: 'black',
  },
  detailTextStyle: {
    color: 'black',
    fontSize: windowWidth < 360 ? 10 : 12,
  },
});
