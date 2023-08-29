import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';

import MealItem from '../../MealItem';

const windowWidth = Dimensions.get('window').width;

function MealsList({ items }) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground
        source={{
          uri: 'https://hips.hearstapps.com/hmg-prod/images/thanksgiving-recipes-citrus-turkey-1626716738.jpg?crop=1.00xw:0.834xh;0,0.0988xh&resize=980:*',
        }}
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'repeat',
  },
  overlay: {
    flex: 1,
    backgroundColor: '#0000009e',
  },
});
