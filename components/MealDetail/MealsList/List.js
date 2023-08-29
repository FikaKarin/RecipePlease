import { Text, View, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.listText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 2,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 22,
    backgroundColor: '#F5F5F5',
  },
  listText: {
    fontSize: windowWidth < 360 ? 12 : 16,
  },
});
