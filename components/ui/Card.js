import { View, StyleSheet } from 'react-native'

export default function Card({children}) {
  return (
    <View style={styles.inputContainer}>
        {children}
    </View>
  )
}


const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#e69e1a',
        borderRadius: 8,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
      },
})