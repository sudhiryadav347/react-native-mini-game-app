import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text } from 'react-native';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import PrimaryButton from './../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
export default function StartGameScreen({ onPickNumber }) {

  const [enteredNumber, setenteredNumber] = useState('');
  function numberInputHandler(enteredText) {
    setenteredNumber(enteredText);
  }

  function resetInputHandler() {
    setenteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'desctructive', onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);

  }

  return (
    <View style={styles.rootContainer}>
      <Title>
        Guess the number!
      </Title>
      <Card>
        <InstructionText>
          Enter a number.
        </InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.inputBtnContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View >
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
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
