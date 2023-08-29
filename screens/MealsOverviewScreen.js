import { useLayoutEffect } from "react";
import { ImageBackground, View } from "react-native";

import MealsList from "../components/MealDetail/MealsList/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return (
    <ImageBackground
      source={{
        uri:
          "https://hips.hearstapps.com/hmg-prod/images/thanksgiving-recipes-citrus-turkey-1626716738.jpg?crop=1.00xw:0.834xh;0,0.0988xh&resize=980:*",
      }}
      style={{ flex: 1 }}
    >
      <View style={{flex:1, backgroundColor: '#0000009e'}}>
      <MealsList items={displayedMeals} />
      </View>
    </ImageBackground>
  );
}

export default MealsOverviewScreen;
