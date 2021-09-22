import React from "react";
import { View, Text } from "react-native";

export default function Footer() {

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 30,
        borderBottomWidth: 2,
        borderBottomColor: "#999",
      }}
    >
      <Text style={{ fontWeight: "500", fontSize: 20 }}>contact methods</Text>
      <Text style={{ fontWeight: "500", fontSize: 20 }}>email : food@gmail.com</Text>

    </View>
  );
}
