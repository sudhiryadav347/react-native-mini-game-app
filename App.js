import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';


export default function App() {
  return (
      <LinearGradient colors={['#e69e1a', '#811b29']} style={styles.rootScreen}>
        <StartGameScreen />
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  }
});
