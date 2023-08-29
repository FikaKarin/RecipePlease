import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const windowWidth = Dimensions.get('window').width;

function ContactLottie() {
  return (
    <View
      style={{
        backgroundColor: '#ffffff7b',
        height: windowWidth / 1.8,
        width: windowWidth,
        alignItems: 'center',
      }}
    >
      <View style={styles.lottieAnimation}>
        <LottieView
          autoPlay
          loop={true}
          source={require('../../assets/images/contactLottie.json')}
        />
      </View>
    </View>
  );
}

export default ContactLottie;

const styles = StyleSheet.create({
  lottieAnimation: {
    height: windowWidth < 360 ? 180 : 240,
    width: windowWidth < 360 ? 180 : 240,
    flex: 1,
  },
});
