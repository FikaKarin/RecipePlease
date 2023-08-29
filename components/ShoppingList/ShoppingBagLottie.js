import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

function ShoppingBagLottie() {
  return (
    <View style={styles.lottieAnimation}>
      <LottieView
        autoPlay
        loop={true}
        source={require('../../assets/images/113209-grocery-shopping-bag-pickup-and-delivery.json')}
      />
    </View>
  );
}

export default ShoppingBagLottie;

const styles = StyleSheet.create({
  lottieAnimation: {
    height: 120,
    width: 120,
    zIndex: 1,
  },
});
