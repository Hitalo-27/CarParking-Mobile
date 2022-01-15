import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, TouchableOpacity} from "react-native";
import { styles} from "./styles";

export function Perfil({...rest}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} {...rest}>
        <Image
          style={styles.image} 
          source={{
            uri: "https://github.com/Hitalo-27.png",
          }}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}