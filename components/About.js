import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useFonts } from 'expo-font';
import Spacer from 'react-styled-spacer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const About = () => {
  const [loaded] = useFonts({
    MerriweatherBold: require('../assets/fonts/Merriweather-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <ScrollView>
      <ImageBackground
        imageStyle={{ opacity: 0.9, height: windowHeight }}
        source={{
          uri: 'https://hips.hearstapps.com/hmg-prod/images/thanksgiving-recipes-citrus-turkey-1626716738.jpg?crop=1.00xw:0.834xh;0,0.0988xh&resize=980:*',
        }}
        resizeMode='repeat'
      >
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/Mustasch.png')}
              style={styles.logo}
            />
          </View>

          <Spacer h={64} />
          <View
            style={{
              borderColor: 'white',
              borderWidth: 0.5,
              width: windowWidth,
            }}
          ></View>
          <Spacer h={32} />
          <View style={styles.descriptionContainer}>
            <View
              style={{
                borderBottomColor: '#00000081',
                borderBottomWidth: 0.5,
              }}
            >
              <Text
                style={{
                  fontSize: windowWidth < 360 ? 18 : 22,
                  fontWeight: 'bold',
                  color: '#333',
                  textAlign: 'center',
                }}
              >
                About us
              </Text>
              <Spacer h={8} />
            </View>
            <Spacer h={8} />
            <Text style={styles.description}>
              Recipe Please is a recipe app designed for food suppliers and
              their customers.
            </Text>
            <Text style={styles.description}>
              Our app features a vast collection of recipes from different food
              suppliers that contain their products.
            </Text>
            <Text style={styles.description}>
              You can easily browse through the different categories and find
              the recipe that suits your needs.
            </Text>
            <Text style={styles.description}>
              In addition, Recipe Please allows you to save ingredients from
              each recipe to your shopping list.
            </Text>
            <Text style={styles.description}>
              Once you have added all the ingredients, you can check what you
              already have at home and delete those items from your shopping
              list.
            </Text>
            <Text style={styles.description}>
              When you are ready to go to the store, you can copy the entire
              list from Recipe Please to your own shopping list and make your
              trip to the store much more efficient.
            </Text>
          </View>
          <Spacer h={32} />
          <View
            style={{
              borderColor: 'white',
              borderWidth: 0.5,
              width: windowWidth,
            }}
          ></View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#0000009e',
    height: windowHeight
  },
  logoContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    padding: 8,
    borderRadius: 18,
    elevation: 4,
    shadowColor: '#00000029',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  },
  logo: {
    width: windowWidth < 360 ? 35 : 45,
    height: windowWidth < 360 ? 35 : 45,
    borderRadius: 8,
  },
  headerContainer: {
    width: windowWidth * 0.8,
    borderRadius: 8,
    alignSelf: 'center',
    padding: windowWidth < 360 ? 4 : 8,
  },
  header: {
    fontSize: windowWidth < 360 ? 16 : 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  descriptionContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: windowWidth < 360 ? 10 : 20,
    shadowColor: '#00000029',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 4,
  },
  description: {
    fontSize: windowWidth < 360 ? 12.5 : 16,
    lineHeight: windowWidth < 360 ? 20 : 24,
    color: '#4d4d4d',
    fontWeight: windowWidth < 360 ? '400' : '600',
  },
});

export default About;
