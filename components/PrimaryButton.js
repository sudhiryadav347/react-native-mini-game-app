import { View, Text, StyleSheet, Pressable } from 'react-native'

function PrimaryButton({ children }) {

    function pressHandler() {

    }
    
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                onPress={pressHandler}
                android_ripple={{ color: '#e69e1a' }}
            >
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;


const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#b77f1a',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    pressed: {
        opacity: 0.75
    }
});