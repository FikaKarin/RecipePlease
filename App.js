import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { store } from './store/redux/store';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import ShoppingList from './screens/ShoppingListScreen';
import LandingScreen from './screens/LandingScreen';
import ContactScreen from './screens/ContactScreen';
import AboutScreen from './screens/AboutScreen';
import Logo from './components/Logo';
import VlogsPartnersScreen from './screens/VlogsPartnersScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const windowWidth = Dimensions.get('window').width;

const drawerTitleSize = windowWidth < 360 ? 18 : 20;

function DrawerNavigator() {
  const [loaded] = useFonts({
    MerriweatherBold: require('./assets/fonts/Merriweather-Bold.ttf'),
    MerriweatherBoldItalic: require('./assets/fonts/Merriweather-BoldItalic.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#a1b89a', height: windowWidth / 5 },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#ffffff' },
        drawerContentStyle: { backgroundColor: '#a1b89a' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#677862',
      }}
    >
      <Drawer.Screen
        name='Welcome'
        component={LandingScreen}
        options={{
          headerStatusBarHeight: Platform.OS === 'android' ? 10 : 24,
          title: '',
          headerTitleAlign: 'center',
          drawerIcon: () => <Logo width={227} height={165} />,
          drawerLabelStyle: {
            fontFamily: 'MerriweatherBold',
            letterSpacing: 2,
            fontSize: 13,
            alignSelf: 'center',
          },
        }}
      />
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          headerStatusBarHeight: Platform.OS === 'android' ? 10 : 24,
          title: 'All Categories',
          headerTitleStyle: { fontSize: drawerTitleSize },
          headerTitleAlign: 'center',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='restaurant-outline' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          headerStatusBarHeight: Platform.OS === 'android' ? 10 : 24,
          headerTitleStyle: { fontSize: drawerTitleSize },
          headerTitleAlign: 'center',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='Shopping list'
        component={ShoppingList}
        options={{
          headerStatusBarHeight: Platform.OS === 'android' ? 10 : 24,
          headerTitleStyle: { fontSize: drawerTitleSize },
          headerTitleAlign: 'center',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='receipt-outline' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='Vlogs & Partners'
        component={VlogsPartnersScreen}
        options={{
          headerStatusBarHeight: Platform.OS === 'android' ? 10 : 24,
          headerTitleStyle: { fontSize: drawerTitleSize },
          headerTitleAlign: 'center',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='videocam-outline' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='Contact'
        component={ContactScreen}
        options={{
          headerStatusBarHeight: Platform.OS === 'android' ? 10 : 24,
          title: 'Contact',
          headerTitleStyle: { fontSize: drawerTitleSize },
          headerTitleAlign: 'center',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='call-outline' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='About us'
        component={AboutScreen}
        options={{
          headerStatusBarHeight: Platform.OS === 'android' ? 10 : 24,
          title: 'About us',
          headerTitleStyle: { fontSize: drawerTitleSize },
          headerTitleAlign: 'center',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='book-outline' color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar style='light' />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStatusBarHeight: Platform.OS === 'android' ? 6 : 14,
              headerStyle: {
                backgroundColor: '#a1b89a',
              },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#ffffff' },
            }}
          >
            <Stack.Screen
              name='Drawer'
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverviewScreen}
              options={{
                headerTitleStyle: {
                  fontSize: drawerTitleSize,
                  height: windowWidth / 5,
                },
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name='MealDetail'
              component={MealDetailScreen}
              options={{
                title: 'About the Meal',
                headerTitleStyle: { fontSize: drawerTitleSize },
                headerTitleAlign: 'center',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
