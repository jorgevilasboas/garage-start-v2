import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { Colors } from "../../styles";

import { styles } from "./styles";

const axios = require('axios').default;

const image = require("../../../assets/placeholder.png");

interface StarProps {
  star: boolean;
}

export const StarIcon = (props: StarProps) => (
  <AntDesign
    size={24}
    name={props.star ? "star" : "staro"}
    color={props.star ? Colors.starColor : Colors.textColor}
  />
);

const Garage = () => {
  const size = useScreenDimensions();
  const [cars, setCars] = useState([])

  const Car = ( {car}) => (<View style={styles.card}>
    <Image
      source={image}
      source={{
          uri: `${car.image.url}`,
        }}
      style={{
        width: "100%",
        height: size.width * 0.5,
      }}
    />
    <View style={styles.details}>
      <View style={styles.header}>
        <Text style={styles.model}>{car.model}</Text>
        <StarIcon star={true} />
      </View>
      <View style={styles.line} />
      <Text style={styles.makeYear}>
        {car.make} | {car.year}
      </Text>
    </View>
  </View>);
  

  async function getUser() {
    try {
      const response = await axios.get('http://localhost:3000/');
      setCars(response.data.items);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser()
    
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Garage</Text>
      <View style={styles.list}>
        {cars.map((car, index) => <Car key={index} car={car}/>)}
        
      </View>
    </ScrollView>
    </View>
  );
};

export default Garage;
