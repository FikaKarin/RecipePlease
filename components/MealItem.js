import {
  Text,
  Pressable,
  View,
  Image,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetail/MealDetails';

const windowWidth = Dimensions.get('window').width;

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  id,
}) {
  const navigation = useNavigation();

  function selectMealHandler() {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: windowWidth > 427 ? 32 : 12,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: '#F5F5F5',

    elevation: 4,
    shadowColor: 'white',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    height: windowWidth / 2,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});
