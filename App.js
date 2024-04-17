import { StyleSheet, Text, View } from 'react-native'
import MenuPestañas from './navigation/Menu'

export default function App() {
  return (
    <View style={styles.container}>
      <MenuPestañas />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
