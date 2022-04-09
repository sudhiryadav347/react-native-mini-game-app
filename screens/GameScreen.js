import { useState } from 'react';
import Colors from '../constants/colors';
import { View, Text, StyleSheet } from 'react-native';
import Title from './../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

export default function GameScreen({useNumber}) {

    const initialGuess = generateRandomBetween(1, 100, useNumber);
    const [currentGuess, setcurrentGuess] = useState(initialGuess)

   
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
                {/* + - */}
            </View>
            <View>
                {/* LOG ROUNDS */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primaryRed400,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.primaryRed400,
        padding: 10,
    }
});