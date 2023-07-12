import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tenDay from './assets/tenDay';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#FFF", textAlign: "center", fontSize: 28, fontWeight: "700" }}>KK WEATHER</Text>

      <View style={{ backgroundColor: '#11ceeb', borderRadius: 20, padding: 20, marginTop: 20, width: "90%", }}>
        <Text style={{ fontSize: 24, fontWeight: "700", color: "white", textAlign: "center" }}>Bakırköy</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
          <Ionicons name={"sunny-outline"} size={100} color={"yellow"} />
          <View>
            <Text style={{ fontSize: 32, fontWeight: "700", color: "white", textAlign: "center" }}>28°C</Text>
            <View>
              <Text style={{ fontSize: 14, fontWeight: "600", color: "white", textAlign: "center" }}>Düşük: 23°C</Text>
              <Text style={{ fontSize: 14, fontWeight: "600", color: "white", textAlign: "center" }}>Yüksek: 30°C</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: '#11ceeb', borderRadius: 20, padding: 20, marginTop: 20, width: "90%" }}>
        <Text style={{ color: "#ccceeb", fontSize: 14, fontWeight: "500" }}>10 Günlük Tahmin</Text>

        {tenDay?.map((item, index) => {
          return (
            <View key={index} style={{ flexDirection: "row", justifyContent: "space-between", width: "80%" }}>
              <Text style={{ fontSize: 20, fontWeight: "500", color: "white" }}>{item.text.slice(0, 3)}</Text>
              {item.image == "wind" ?
                <FontAwesome5 name={"wind"} size={20} color={"white"} />
                : <Ionicons name={item.image} size={20} color={item.image == "sunny-outline" ? "yellow" : "white"} />
              }
              <Text style={{ fontSize: 20, fontWeight: "500", color: "lightblue" }}>{item.low}</Text>
              <Text style={{ fontSize: 20, fontWeight: "500", color: "white" }}>{item.high}</Text>
            </View>
          )
        })
        }
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#87ceeb',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
