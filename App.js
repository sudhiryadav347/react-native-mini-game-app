import Colors from './constants/colors';
import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';



export default function App() {

  const [pickedNumber, setpickedNumber] = useState('');
  const [gameIsOver, setGameIsOver] = useState(true);

  const pickedNumberHandler = (number) => {
    setpickedNumber(number);
    setGameIsOver(false);
  }

  const gameOverHandler = () => {
    
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (pickedNumber) {
    screen = <GameScreen userNumber={pickedNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && pickedNumber) {
    screen = <GameOverScreen />
  }


  return (
    <LinearGradient colors={[Colors.primaryYellow, Colors.primaryRed]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
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
