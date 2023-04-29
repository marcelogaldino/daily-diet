import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import theme from './src/theme';
import { Home } from '@screens/Home';
import { IconContext } from 'phosphor-react-native';
import { LoadIndicator } from '@components/LoadIndicator';
import { MealDetails } from '@screens/MealDetails';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <IconContext.Provider
        value={{
          size: 24
        }}
      >
        <StatusBar
          barStyle='dark-content'
          backgroundColor='transparent'
          translucent
        />
        {fontsLoaded ? <Routes /> : <LoadIndicator />}
      </IconContext.Provider>
    </ThemeProvider>
  );
}
