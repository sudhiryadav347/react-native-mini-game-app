import { useState, useEffect } from 'react';
import Colors from '../constants/colors';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Title from './../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {

    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setcurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber)
            onGameOver();

    }, [currentGuess, userNumber, onGameOver]);


    function nextGuessHandler(direction) {

        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You know this is wrong...', [
                { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setcurrentGuess(newRndNumber);

    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card>
                <InstructionText style={styles.InstructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                    </View>
                </View>
            </Card>
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
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center'
    },
    buttonContainer: {
        flex: 1
    },
    InstructionText: {
        marginBottom: 12,
    }
});