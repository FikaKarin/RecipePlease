import MealsList from '../components/MealDetail/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { useSelector } from 'react-redux';

const windowWidth = Dimensions.get('window').width;

function FavoritesScreen() {
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={{
            uri: 'https://hips.hearstapps.com/hmg-prod/images/thanksgiving-recipes-citrus-turkey-1626716738.jpg?crop=1.00xw:0.834xh;0,0.0988xh&resize=980:*',
          }}
          style={styles.imageBackground}
        >
          <View style={styles.overlay}>
            <View style={styles.headerContainer}>
              <View
                style={{
                  backgroundColor: '#ffffffe0', padding: 8, width: windowWidth
                }}
              >
                <Text style={styles.header}>
                  You have no favorite meals yet!
                </Text>
              </View>
            </View>
            </View>
        </ImageBackground>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'repeat',
  },
  headerContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  header: {
    fontSize: windowWidth < 360 ? 18 : 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: '#0000009e'
  },
});
