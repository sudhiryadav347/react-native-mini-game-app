import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Your number is {userNumber}</Title>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/unagi.png')} style={styles.image} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: deviceWidth < 380 ? 250 : 300,
    height: deviceWidth < 380 ? 250 : 300,
    borderRadius: 150,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginVertical: 20,
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primaryYellow,
    fontWeight: 'bold',
    fontSize: 24
  }
})