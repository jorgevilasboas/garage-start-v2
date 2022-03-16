import { StyleSheet } from 'react-native'

export const Colors = {
  backgroundColor: "#EFEDEE",
  cardColor: "#ffffff",
  textColor: "#000000",
  starColor: "#F9E26B",
  divisorColor: "#9F9F9F",
};

export const Spacing = {
  padding: 15,
  extraMargin: 10,
};

export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: "flex-start",
    justifyContent: "center",    
  },
});
