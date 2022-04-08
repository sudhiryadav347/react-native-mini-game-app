import { View, TextInput, StyleSheet } from 'react-native';
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false}/>
      <View style={styles.inputBtnContainer}>
      <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
 inputContainer: {
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
 }
});
