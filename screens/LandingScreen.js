import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Animated,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

const windowWidth = Dimensions.get('window').width;

function LandingScreen() {
  const navigation = useNavigation();
  const scaleValue = React.useRef(new Animated.Value(1)).current;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (navigation) {
        navigation.navigate('Categories');
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  const pulsateAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    pulsateAnimation();
  }, []);

  const buttonOpacity = React.useRef(new Animated.Value(1)).current;

  const onButtonPressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.9,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(buttonOpacity, {
      toValue: 0.7,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const onButtonPressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Categories');
    });
  };

  clearTimeout(1)

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={{
        uri: 'https://hips.hearstapps.com/hmg-prod/images/thanksgiving-recipes-citrus-turkey-1626716738.jpg?crop=1.00xw:0.834xh;0,0.0988xh&resize=980:*',
      }}
      resizeMode='cover'
    >
      <View style={styles.rootContainer}>
        <View>
          <Pressable
            android_ripple={{ color: '#ccc' }}
            style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
            onPressIn={onButtonPressIn}
            onPressOut={onButtonPressOut}
          >
            <Animated.Image
              style={{
                borderRadius: 8,
                height: windowWidth < 360 ? 190 : 210,
                width: windowWidth < 360 ? 270 : 290,
                transform: [{ scale: scaleValue }],
                opacity: buttonOpacity,
              }}
              source={require('../assets/icon.png')}
            />
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

export default LandingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 3,
  },
  buttonPressed: {
    backgroundColor: 'black',
    opacity: 0.9,
  },
  backgroundImage: {
    flex: 1,
  },
});
