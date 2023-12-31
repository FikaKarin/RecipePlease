import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Italian', '#316f31'),
  new Category('c2', '10 - 30 min', '#287411ac'),
  new Category('c3', 'Hamburgers', '#287411ac'),
  new Category('c4', 'Austrian', '#316f31'),
  new Category('c5', 'Nordic', '#316f31'),
  new Category('c6', 'Fusion', '#287411ac'),
  new Category('c7', 'Breakfast', '#287411ac'),
  new Category('c8', 'Asian','#316f31'),
  new Category('c9', 'French', '#316f31'),
  new Category('c10', 'Summer', '#287411ac'),
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'affordable',
    'simple',
    'https://images.kosher.com/uploads/Bendkowski-Ruth-Mock-Meatballs-with-Zucchini-Noodles.jpg',
    20,
    [
      'Tomatoes, 4',
      'Olive Oil, 1 Tablespoon',
      'Onion, 1',
      'Spaghetti, 250g',
      'Spices',
      'Cheese (optional)',
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.',
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2'],
    'Toast Hawaii',
    'affordable',
    'simple',
    'https://images.squarespace-cdn.com/content/v1/55cc5010e4b0d7b9ee00a037/1447013659331-L9K59UUWK47X5IXUABMT/image-asset.jpeg?format=2500w',
    10,
    [
      'White bread, 1 Slice',
      'Ham, 1 Slice ',
      'Pineapple, 1 Slice',
      'Cheese, 1-2 Slices',
      'Butter',
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C',
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c3'],
    'Classic Hamburger',
    'pricey',
    'simple',
    'https://static.cdn-expressen.se/images/ed/79/ed7990bd913c4ecaa07cdb9d76aef545/16x9/1000@60.jpg',
    45,
    [
      'Cattle Hack, 300g',
      'Tomato, 1',
      'Cucumber, 1',
      'Onion, 1',
      'Ketchup, as needed',
      'Burger Buns, 2',
    ],
    [
      'Form 2 patties',
      'Fry the patties for c. 4 minutes on each side',
      'Quickly fry the buns for c. 1 minute on each side',
      'Bruch buns with ketchup',
      'Serve burger with tomato, cucumber and onion',
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'Wiener Schnitzel',
    'luxurious',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    60,
    [
      'Veal Cutlets, 8',
      'Eggs, 4',
      'Bread Crumbs, 200g',
      'Flour, 100g',
      'Butter, 300ml',
      'Vegetable Oil, 100g',
      'Salt, to taste',
      'Lemon Slices, as garnish',
    ],
    [
      'Tenderize the veal to about 2–4mm, and salt on both sides.',
      'On a flat plate, stir the eggs briefly with a fork.',
      'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
      'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
      'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
      'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.',
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c2', 'c5', 'c10'],
    'Salad with Smoked Salmon',
    'luxurious',
    'simple',
    'https://www.foodandwine.com/thmb/p-_QOmiK8eM_tJ6fD5H1dROaya4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HD-201202-r-spinach-and-smoked-salmon-salad-with-lemon-dill-dressing-6106f61623f4410b8c46dbe4055ce735.jpg',
    15,
    [
      'Arugula',
      "Lamb's Lettuce",
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt and Pepper',
    ],
    [
      'Wash and cut salad and herbs',
      'Dice the salmon',
      'Process mustard, vinegar and olive oil into a dessing',
      'Prepare the salad',
      'Add salmon cubes and dressing',
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Delicious Orange Mousse',
    'affordable',
    'hard',
    'https://i0.wp.com/desperatelydesserts.com/wp-content/uploads/OrangeBall/orange-theme-dessert-banner-scaled.jpg?w=2400&ssl=1',
    240,
    [
      'Gelatine Sheets, 4 Sheets',
      'Orange Juice',
      'Sugar, 80g',
      'Yoghurt, 300g',
      'Cream, 200g',
      'Orange Peel, 50gr',
    ],
    [
      'Dissolve gelatine in pot',
      'Add orange juice and sugar',
      'Take pot off the stove',
      'Add 2 tablespoons of yoghurt',
      'Stir gelatin under remaining yoghurt',
      'Cool everything down in the refrigerator',
      'Whip the cream and lift it under die orange mass',
      'Cool down again for at least 4 hours',
      'Serve with orange peel',
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm7',
    ['c7'],
    'Pancakes',
    'affordable',
    'simple',
    'https://www.maghalsa.se/wp-content/uploads/2021/06/Glutenfria-amerikanska-pannkakor-med-fiberhusk-web.png',
    20,
    [
      'All-purpose Flour, 1 1/2 Cups',
      'Baking Powder, 3 1/2 Teaspoons',
      'Salt, 1 Teaspoon',
      'White Sugar, 1 Tablespoon',
      'Milk, 1 1/4 cups',
      'Egg, 1',
      'Butter, 3 Tablespoons, melted',
    ],
    [
      'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm8',
    ['c8'],
    'Creamy Indian Chicken Curry',
    'pricey',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    35,
    [
      'Chicken Breasts, 4',
      'Onion, 1',
      'Garlic Cloves, 2',
      'Ginger, 1 Piece',
      'Almonds, 4 Tablespoons',
      'Cayenne Pepper, 1 Teaspoon',
      'Coconut Milk, 500ml',
    ],
    [
      'Slice and fry the chicken breast',
      'Process onion, garlic and ginger into paste and sauté everything',
      'Add spices and stir fry',
      'Add chicken breast + 250ml of water and cook everything for 10 minutes',
      'Add coconut milk',
      'Serve with rice',
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm9',
    ['c9'],
    'Chocolate Souffle',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
    45,
    [
      'Melted Butter, 1 Teaspoon',
      'White Sugar, 2 Tablespoons',
      '70% Dark Chocolate, broken into pieces, 2 Ounces',
      'Butter, 1 Tablespoon',
      'All-purpose Flour, 1 Tablespoon',
      'Cold Milk, 4 1/3 Tablespoons',
      'Salt, 1 Pinch',
      'Cayenne Pepper, 1 Pinch',
      'Large Egg Yolk, 1',
      'Large Egg Whites, 2',
      'Cream of Tartar, 1 Pinch',
      'White Sugar, 1 Tablespoon',
    ],
    [
      'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
      'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
      'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
      'Place chocolate pieces in a metal mixing bowl.',
      'Place bowl over a pan of about 3 cups hot water over low heat.',
      'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
      'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
      'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
      'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
      'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
      'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
      'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
      'Transfer a little less than half of egg whites to chocolate.',
      'Mix until egg whites are thoroughly incorporated into the chocolate.',
      'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
      'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
      'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.',
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm10',
    ['c2', 'c5', 'c10'],
    'Asparagus Salad with Cherry Tomatoes',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    30,
    [
      'White and Green Asparagus',
      'Pine Nuts, 30g',
      'Cherry Tomatoes, 300g',
      'Salad',
      'Salt',
      'Pepper',
      'Olive Oil',
    ],
    [
      'Wash, peel and cut the asparagus',
      'Cook in salted water',
      'Salt and pepper the asparagus',
      'Roast the pine nuts',
      'Halve the tomatoes',
      'Mix with asparagus, salad and dressing',
      'Serve with Baguette',
    ],
    true,
    true,
    true,
    true
  ),
];
