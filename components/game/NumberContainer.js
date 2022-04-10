import Colors from '../../constants/colors';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primaryRed,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 18 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.primaryRed,
    fontSize: deviceWidth < 380 ? 24 : 30,
    fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
  },
});
