import { Platform, StyleSheet } from "react-native";

export const shadowStyles = StyleSheet.create({
    shadowBox: {
      width: 200,
      height: 200,
      backgroundColor: 'white',
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
        },
        android: {
          elevation: 5,
        },
      }),
    },
  });