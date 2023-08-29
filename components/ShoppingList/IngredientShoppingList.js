import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TextInput,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeIngredient,
  addIngredient,
} from '../../store/redux/shoppingList';
import Spacer from 'react-styled-spacer';
import * as Clipboard from 'expo-clipboard';
import IconButton from '../IconButton';
import ShoppingCartLottie from './ShoppingBagLottie';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function IngredientShoppingList() {
  const [message, setMessage] = useState('');
  const [inputIngredient, setInputIngredient] = useState('');
  const dispatch = useDispatch();

  const shoppingListIngredients = useSelector(
    (state) => state.shoppingListIngredients.ingredient
  );
  const sortedList = shoppingListIngredients.slice().sort();
  console.log('ShoppingList', shoppingListIngredients);

  const handleRemoveIngredient = (id) => {
    dispatch(removeIngredient(id));
  };

  const handleAddIngredient = () => {
    if (inputIngredient.trim() === '') return;
    dispatch(addIngredient(inputIngredient));
    setInputIngredient('');
    console.log(inputIngredient);
  };

  const copyToClipboard = () => {
    const ingredientsText = shoppingListIngredients
      .map((ingredient) => ingredient.name)
      .join('\n');
    Clipboard.setStringAsync(ingredientsText);
    console.log(ingredientsText);

    const messageTimeout = setTimeout(() => {
      setMessage('');
    }, 2000);
    setMessage('Your list is copied!');
  };

  if (shoppingListIngredients.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <View style={styles.emptyTextContainer}>
          <Text style={styles.emptyText}>Your shopping list is empty!</Text>
        </View>

        <View style={styles.emptyIconContainer}>
          <ShoppingCartLottie />
        </View>
      </View>
    );
  }

  const iconDimension = windowWidth < 360 ? 18 : 20;
  const copyIconDimensions = windowWidth < 380 ? 20 : 24;

  return (
    <>
      <View style={styles.rootContainer}>
        <View style={styles.clipboard}>
          <View
            style={{ alignSelf: 'flex-end', paddingTop: 12, paddingRight: 12 }}
          >
            <IconButton
              icon={'copy-outline'}
              size={copyIconDimensions}
              color='#014c01'
              onPress={copyToClipboard}
            />
          </View>
          {message ? (
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>{message}</Text>
            </View>
          ) : null}
          <Spacer h={16} />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='Add a new ingredient...'
              value={inputIngredient}
              onChangeText={setInputIngredient}
              onSubmitEditing={handleAddIngredient}
            />
            <IconButton
              icon='add-circle-outline'
              color='#014c01'
              size={24}
              onPress={handleAddIngredient}
            />
          </View>
          <Spacer h={windowWidth < 360 ? 4 : 8} />
          <View style={styles.listContainer}>
            <View style={styles.list}>
              <FlatList
                keyExtractor={(item) => item.id}
                numberOfLines={2}
                data={sortedList}
                renderItem={({ item }) => (
                  <View
                    android_ripple={{ color: '#ccc' }}
                    style={({ pressed }) => [
                      styles.button,
                      pressed ? styles.buttonPressed : null,
                    ]}
                  >
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          paddingTop: windowWidth < 360 ? 6 : 12,
                        }}
                      >
                        <Text style={styles.listItems}>{item.name}</Text>
                        <IconButton
                          icon={'trash'}
                          size={iconDimension}
                          color='#790101'
                          onPress={() => handleRemoveIngredient(item.id)}
                        />
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
export default IngredientShoppingList;

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: windowWidth < 360 ? 6 : 16,
    flex: 1,
  },
  emptyTextContainer: {
    paddingVertical: 8,
    width: windowWidth,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    backgroundColor: '#F5F5F5',
  },
  emptyText: {
    fontSize: windowWidth < 360 ? 18 : 22,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  emptyIconContainer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  clipboard: {
    flex: 1,
    borderRadius: 8,
    marginVertical: 14,
    backgroundColor: '#e4f5e4ff',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  listContainer: {
    flex: 1,
    paddingVertical: windowWidth < 360 ? 8 : 16,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  list: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    overflow: 'visible',
    backgroundColor: 'white',
    elevation: 2,
  },
  listItems: {
    padding: 8,
    fontSize: windowWidth < 350 ? 12.5 : 16,
    maxWidth: '85%',
  },
  messageContainer: {
    position: 'absolute',
    top: 10,
    alignSelf: 'center',
    backgroundColor: '#014c01',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  messageText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: windowWidth < 360 ? 10 : 16,
    width: windowWidth < 360 ? windowWidth * 0.95 : '100%',
  },
  input: {
    flex: 1,
    fontSize: windowWidth < 360 ? 12 : 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginRight: 12,
    height: windowWidth < 360 ? windowHeight * 0.06 : windowHeight * 0.04,
  },
});
