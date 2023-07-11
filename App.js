import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#FFF", textAlign: "center", fontSize: 28, fontWeight: "700" }}>KK WEATHER</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
