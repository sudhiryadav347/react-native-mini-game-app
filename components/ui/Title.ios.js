import { Text, StyleSheet, Platform } from 'react-native';

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: '#800040',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'ios' ? 0 : 2,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    padding: 10,
    maxWidth: '80%',
    width: 300,
  },
});