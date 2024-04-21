import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router';
import { useFonts } from 'expo-font';

const RooyLayout = () => {
  const [fontsLoaded, error] = useFonts ({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  })


  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RooyLayout