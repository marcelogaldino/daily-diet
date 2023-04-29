import { ButtonIcon } from '@components/ButtonIcon'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/Home'
import { MealDetails } from '@screens/MealDetails'
import { NewMeal } from '@screens/NewMeal'
import { useTheme } from 'styled-components'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    const theme = useTheme()
    return (
        <Navigator initialRouteName='NewMeal' >
            <Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />

            <Screen
                name='MealDetails'
                component={MealDetails}
                options={{ headerShown: false }}
            />

            <Screen
                name='NewMeal'
                component={NewMeal}

                options={
                    {
                        headerLeft: () => (
                            <ButtonIcon buttonIconName='arrow-left' color={theme.COLORS.GRAY_700} />
                        ),
                        title: 'Nova refeição',
                        headerTintColor: theme.COLORS.GRAY_700,
                        headerTitleAlign: 'center',
                        headerShadowVisible: false,
                        headerTitleStyle: {
                            fontFamily: theme.FONT_FAMILY.BOLD,
                            fontSize: theme.FONT_SIZE.XL,

                        },
                        headerStyle:
                        {
                            backgroundColor: theme.COLORS.GRAY_300,
                        }

                    }
                }
            />

        </Navigator>
    )
}