import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { addIngredient } from '../store/redux/shoppingList';
import { useDispatch } from 'react-redux';
import Spacer from 'react-styled-spacer';
import IconButton from '../components/IconButton';

const windowWidth = Dimensions.get('window').width;

function IngredientItem({ ingredient }) {
  const dispatch = useDispatch();

  const handleAddToShoppingList = () => {
    dispatch(addIngredient(ingredient));
  };

  return (
    <TouchableOpacity onPress={handleAddToShoppingList}>
      <View>
        <Spacer h={8} />
        <View style={styles.listItem}>
          <Spacer w={2} />
          <View style={{ width: '50%' }}>
            <Text style={styles.itemText}>{ingredient}</Text>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <IconButton icon={'add'} color='green' size={18} />
            <Text style={{ fontSize: windowWidth < 360 ? 12 : 14 }}>
              to shopping list
            </Text>
          </View>
          <Spacer w={2} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default IngredientItem;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 2,
    paddingHorizontal: 8,
    paddingVertical: windowWidth < 360 ? 4 : 6,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  itemText: {
    textAlign: 'left',
    fontSize: windowWidth < 360 ? 14 : 16,
  },
});
