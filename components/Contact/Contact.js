import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Spacer from 'react-styled-spacer';
import ContactLottie from '../Contact/ContactLottie';

const windowWidth = Dimensions.get('window').width;

const Contact = () => {
  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: 'https://hips.hearstapps.com/hmg-prod/images/thanksgiving-recipes-citrus-turkey-1626716738.jpg?crop=1.00xw:0.834xh;0,0.0988xh&resize=980:*',
        }}
        resizeMode='repeat'
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.logo}
          />
          <Spacer h={32} />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Contact Us</Text>
          </View>
          <Spacer h={windowWidth < 360 ? 8 : 16} />
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>GET IN TOUCH</Text>
            <Spacer h={windowWidth < 360 ? 0 : 4} />
            <View style={styles.infoRow}>
              <Ionicons
                name='mail-outline'
                color={'green'}
                size={20}
                style={{ padding: 8 }}
              />
              <Text style={styles.infoText}>support@recipeplease.com</Text>
            </View>
            <Spacer h={windowWidth < 360 ? 0 : 4} />
            <View style={styles.infoRow}>
              <Ionicons
                name='call'
                color={'green'}
                size={20}
                style={{ padding: 8 }}
              />
              <Text style={styles.infoText}>+46 73 422 33 22</Text>
            </View>
            <Spacer h={windowWidth < 360 ? 0 : 4} />
            <View style={styles.infoRow}>
              <Ionicons
                name='pin-outline'
                color={'green'}
                size={20}
                style={{ padding: 8 }}
              />
              <Text style={styles.infoText}>
                Receptgatan 6, 24312 Stockholm
              </Text>
            </View>
          </View>
          <Spacer h={44} />
          <ContactLottie />
          <Spacer h={windowWidth > 360 ? 154 : 20} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#0000009e',
    shadowColor: '#0000002b',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 4,
  },
  logo: {
    width: windowWidth < 360 ? 220 : 280,
    height: windowWidth < 360 ? 140 : 180,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#8080801b',
  },
  headerContainer: {
    backgroundColor: '#ffffffd6',
    width: windowWidth,
    alignSelf: 'center',
    padding: 8,
  },
  header: {
    fontSize: windowWidth < 360 ? 18 : 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    width: windowWidth<360?  windowWidth*0.85: windowWidth*0.7,
  },
  infoTitle: {
    fontSize: windowWidth < 360 ? 14 : 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    width: 30,
    height: 30,
    tintColor: '#316f31',
  },
  infoText: {
    fontSize: windowWidth < 360 ? 14 : 16,
    color: '#666',
  },
});

export default Contact;
