import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
  ScrollView,
  View,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const BrandList = () => {
  const openUrl = (url) => {
    Linking.openURL(url);
  };

  const companies = [
    {
      name: 'Coop',
      logo: require('../../assets/coop.png'),
      url: 'https://www.coop.se/',
    },
    {
      name: 'Arla',
      logo: require('../../assets/arla.png'),
      url: 'https://www.arla.se/',
    },
    {
      name: 'Willys',
      logo: require('../../assets/willys.png'),
      url: 'https://www.willys.se/',
    },
    {
      name: 'ICA',
      logo: require('../../assets/ica.png'),
      url: 'https://www.ica.se/',
    },
    {
      name: 'Valio',
      logo: require('../../assets/valio.png'),
      url: 'https://www.valio.se/',
    },
    {
      name: 'Felix',
      logo: require('../../assets/felix.png'),
      url: 'https://www.felix.se/',
    },
    {
      name: 'Oatly',
      logo: require('../../assets/oatly.png'),
      url: 'https://www.oatly.com/se/',
    },

    {
      name: 'Scan',
      logo: require('../../assets/scan.png'),
      url: 'https://www.scan.se/',
    },
    {
      name: 'Lidl',
      logo: require('../../assets/lidl.png'),
      url: 'https://www.lidl.se/',
    },
  ];

  return (
    <ScrollView horizontal={true} style={{ borderRadius: 4, borderLeftWidth: 0.5,
      borderBottomWidth: 0.8,
      borderTopWidth: 0.5,
      borderRightWidth: 0.0, }}>
      <View style={styles.container}>
        {companies.map((company) => (
          <TouchableOpacity
            key={company.name}
            onPress={() => openUrl(company.url)}
          >
            <Image source={company.logo} style={styles.logo} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 2,
    justifyContent: 'space-between',
    borderRadius: 4,
  },
  logo: {
    width: windowWidth < 426 ? 70 : 95,
    height: windowWidth < 426 ? 70 : 95,
    resizeMode: 'contain',
    marginHorizontal: 4,
  },
});

export default BrandList;
