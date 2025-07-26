import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, flexGrow: 1 }}>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>Daftar 10 Ikon:</Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        <AntDesign name="stepforward" size={80} color="black" />
        <AntDesign name="stepbackward" size={80} color="black" />
        <Entypo name="infinity" size={80} color="black" />
        <FontAwesome name="plane" size={80} color="black" />
        <Feather name="bell" size={80} color="black" />
        <Feather name="calendar" size={80} color="black" />
        <Feather name="activity" size={80} color="black" />
        <Feather name="airplay" size={80} color="black" />
        <FontAwesome name="heart" size={80} color="black" />
        <FontAwesome name="star" size={80} color="black" />
      </View>
    </ScrollView>
  );
}
