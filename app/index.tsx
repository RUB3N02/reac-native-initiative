import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
// const icon = require("../assets/images/icon.png");

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <StatusBar style="auto" />
      <Text className="text-white justify-center text-5xl font-bold" >Mamahuevo</Text>
      {/* <Image source={icon}  style={{ width: 100, height: 100  }} /> */}
      {/* pixeles efectivos */}
      <Image resizeMode="contain" source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNZ16jdmYQBOl_9fPr6IARn0fOn8a3GYiABMXg23m&s" }} style={{ width: 210, height: 294 }} />



      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Tremendo Mamahuevo.")}
      >
        <Text style={styles.buttonText}>Pulsa aquí.</Text>
      </TouchableOpacity> */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && { backgroundColor: "#104E8B" } // cambia color al presionar
        ]}
        onPress={() => alert("Tremendo Mamahuevo.")}
      >
        <Text style={styles.buttonText}>Pulsa aquí.</Text>
      </Pressable>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1E90FF", // azul brillante
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});