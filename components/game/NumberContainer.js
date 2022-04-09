import Colors from '../../constants/colors';
import { View, Text, StyleSheet } from 'react-native';

export default function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primaryRed,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.primaryRed,
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'open-sans-bold'
    }
})