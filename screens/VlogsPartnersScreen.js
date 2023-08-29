import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';
import { useFonts } from 'expo-font';

import Spacer from 'react-styled-spacer';
import BrandList from '../components/VlogsPartners/BrandList';
import Vlogs from '../components/VlogsPartners/Vlogs';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const VlogsPartnersScreen = () => {
  const [loaded] = useFonts({
    MerriweatherBold: require('../assets/fonts/Merriweather-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#000000ff',
          height: windowHeight,
        }}
      >
        <ImageBackground
          imageStyle={{ opacity: 0.5, height: windowHeight }}
          source={{
            uri: 'https://hips.hearstapps.com/hmg-prod/images/thanksgiving-recipes-citrus-turkey-1626716738.jpg?crop=1.00xw:0.834xh;0,0.0988xh&resize=980:*',
          }}
          resizeMode='cover'
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../assets/Mustasch.png')}
                style={styles.logo}
              />
            </View>
            <Spacer h={62} />
            <View
              style={{
                borderBottomColor: '#00000081',
                borderBottomWidth: 0.5,
                backgroundColor: '#F5F5F5',
                width: windowWidth * 0.9,
                borderRadius: 8,
                padding: 8,
              }}
            >
              <Spacer h={windowWidth < 360 ? 4 : 8} />
              <Text
                style={{
                  fontSize: windowWidth < 360 ? 18 : 22,
                  fontWeight: 'bold',
                  color: '#333',
                  textAlign: 'center',
                }}
              >
                <Text style={styles.header}>
                  At{' '}
                  <Text style={{ fontFamily: 'MerriweatherBold' }}>
                    Recipe Please!
                  </Text>
                </Text>
              </Text>
              <Text style={{ textAlign: 'center' }}>
                you'll find recipies from:
              </Text>
              <Spacer h={windowWidth < 360 ? 8 : 16} />
              <BrandList />
              <Spacer h={windowWidth < 360 ? 6 : 12} />
              
            </View>
            <Spacer h={32} />

            <View
              style={{
                borderColor: 'white',
                borderWidth: 0.5,
                width: windowWidth,
              }}
            ></View>
            <Spacer h={32} />
            <View
              style={{
                backgroundColor: '#F5F5F5',
                width: windowWidth * 0.9,
                borderRadius: 8,
                alignSelf: 'center',
                padding: 8,
              }}
            >
              <View
                style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }}
              >
                <Text
                  style={{
                    fontSize: windowWidth < 360 ? 16 : 22,
                    fontWeight: 'bold',
                    color: '#333',
                    textAlign: 'center',
                  }}
                >
                  VLOGS
                </Text>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: windowWidth < 360 ? 12 : 14,
                  padding: 18,
                  textTransform: 'uppercase',
                }}
              >
                Here you can watch some of our partners cooking vlogs and follow
                along!
              </Text>
              <Vlogs />
            </View>
            <Spacer h={32} />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: windowWidth < 360 ? 10 : 20,
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    padding: 8,
    borderRadius: 18,
    elevation: 4,
    shadowColor: Platform.OS === 'ios' && '#00000029',
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

export default VlogsPartnersScreen;
