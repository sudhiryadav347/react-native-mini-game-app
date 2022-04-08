import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen() {

  const [enteredNumber, setenteredNumber] = useState('');
  function numberInputHandler(enteredText) {
    setenteredNumber(enteredText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        value={enteredNumber}
        onChange={numberInputHandler}
      />
      <View style={styles.inputBtnContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#e69e1a',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    color: '#000',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'

  },
  inputBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center'
  },
  buttonContainer: {
    flex: 1
  }
});
