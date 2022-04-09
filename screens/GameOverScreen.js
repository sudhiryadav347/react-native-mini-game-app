import { View, StyleSheet, Image } from 'react-native';
import Title from '../components/ui/Title';

export default function GameOverScreen({userNumber}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Your number is {userNumber}</Title>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/unagi.png')} style={styles.image} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  }
})