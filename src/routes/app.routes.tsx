import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { MealsDashboard } from "@screens/MealsDashboard";
import { NewMealCreated } from "@screens/NewMealCreated";
import { NewMealForm } from "@screens/NewMealForm";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="dashboard" component={MealsDashboard} />
      <Screen name="newMealForm" component={NewMealForm} />
      <Screen name="newMealCreated" component={NewMealCreated} />
    </Navigator>
  );
}
