import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';


export default function App() {

  const [pickedNumber, setpickedNumber] = useState('');

  const pickedNumberHandler = (number) => {
    setpickedNumber(number);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(pickedNumber){
    screen = <GameScreen />
  }

  return (
    <LinearGradient colors={['#e69e1a', '#811b29']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen} 
        imageStyle={styles.backgroundImage}
      >
        { screen }
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
