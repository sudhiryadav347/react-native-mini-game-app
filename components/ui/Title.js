
import { Text, StyleSheet } from 'react-native';

export default function Title({children}) {
  return (
    <Text style={styles.title}>{ children }</Text>
  )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#800040',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#800040',
        padding: 10,
    }
});