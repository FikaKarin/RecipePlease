import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import IngredientShoppingList from '../components/ShoppingList/IngredientShoppingList';

const windowWidth = Dimensions.get('window').width;

function ShoppingListScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: 'https://hips.hearstapps.com/hmg-prod/images/thanksgiving-recipes-citrus-turkey-1626716738.jpg?crop=1.00xw:0.834xh;0,0.0988xh&resize=980:*',
        }}
      >
        <View style={styles.overlay}>
          <IngredientShoppingList />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: '#0000009e'
  },
});

export default ShoppingListScreen;
