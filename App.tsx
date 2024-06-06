import { StatusBar } from "react-native";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { ThemeProvider } from "styled-components/native";
import { Loading } from "@components/Loading";
import theme from "@theme/index";

import { Routes } from "src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
