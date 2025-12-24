import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import { getLatestGames } from "../src/api/metacritic";
import type { Game } from "../src/types/types";

// const icon = require("../assets/images/icon.png");

export default function Index() {

  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    getLatestGames().then(setGames);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {games.map((game) => (
        <View key={game.slug} style={styles.card} >
          <Image source={{ uri: game.image }} style={styles.image} />
          <Text style={styles.title}>{game.title}</Text>
          <Text style={styles.description}>{game.description}</Text>
          <Text style={styles.score}>{game.score}</Text>

        </View>))}
    </View>

    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <Text className="text-white justify-center text-5xl font-bold" >Mamahuevo</Text>
    //   {/* <Image source={icon}  style={{ width: 100, height: 100  }} /> */}
    //   {/* pixeles efectivos */}
    //   <Image resizeMode="contain" source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNZ16jdmYQBOl_9fPr6IARn0fOn8a3GYiABMXg23m&s" }} style={{ width: 210, height: 294 }} />
    //   {/* <TouchableOpacity
    //     style={styles.button}
    //     onPress={() => alert("Tremendo Mamahuevo.")}
    //   >
    //     <Text style={styles.buttonText}>Pulsa aquí.</Text>
    //   </TouchableOpacity> */}
    //   <Pressable
    //     style={({ pressed }) => [
    //       styles.button,
    //       pressed && { backgroundColor: "#104E8B" } // cambia color al presionar
    //     ]}
    //     onPress={() => alert("Tremendo Mamahuevo.")}
    //   >
    //     <Text style={styles.buttonText}>Pulsa aquí.</Text>
    //   </Pressable>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },


});