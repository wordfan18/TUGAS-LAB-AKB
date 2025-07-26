import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // Fonts 
    "bitcount-double": require("../assets/fonts/BitcountPropDouble_Cursive-Bold.ttf"),
    "bitcount-single": require("../assets/fonts/BitcountPropSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf"),
    "bungee": require("../assets/fonts/Bungee-Regular.ttf"),
    "exo2-bolditalic": require("../assets/fonts/Exo2-BoldItalic.ttf"),
    "intertight-bolditalic": require("../assets/fonts/InterTight-BoldItalic.ttf"),
    "opensans-italic": require("../assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf"),
    "oswald-variable": require("../assets/fonts/Oswald-VariableFont_wght.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "playfair-italic": require("../assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf"),
    "robotocondensed-italic": require("../assets/fonts/RobotoCondensed-Italic-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (loaded && !error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Stack />;
}
