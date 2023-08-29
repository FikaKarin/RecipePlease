import React from 'react';
import { Image } from 'react-native';

function Logo({ width, height }) {
  return (
    <Image
      source={require('../assets/icon.png')}
      style={{ width: width, height: height, borderRadius: 8}}
    />
  );
}

export default Logo;
