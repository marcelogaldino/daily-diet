import {
  Container,
  Header,
  ArrowIconUpRight,
  ArrowIconUpRightButton,
  DescriptionHeader,
  TitleHeader,
  Content,
  ContainerMealInfo,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealInfo } from "@components/MealInfo";
import { useTheme } from "styled-components/native";

type RouteParams = {
  percentageStats: string;
  isOnDiet: boolean;
  bestSequence: number;
  totalMeals: number;
  negativeMeals: number;
  positiveMeals: number;
};

export function MealsDashboard() {
  const route = useRoute();
  const {
    bestSequence,
    isOnDiet,
    negativeMeals,
    percentageStats,
    positiveMeals,
    totalMeals,
  } = route.params as RouteParams;

  const navigation = useNavigation();
  const { COLORS } = useTheme();

  function handleNavigationBack() {
    navigation.goBack();
  }

  return (
    <Container isOnDiet={isOnDiet}>
      <Header>
        <ArrowIconUpRightButton onPress={handleNavigationBack}>
          <ArrowIconUpRight isOnDiet={isOnDiet} />
        </ArrowIconUpRightButton>
        <TitleHeader>{percentageStats}%</TitleHeader>
        <DescriptionHeader>das refeições dentro da dieta</DescriptionHeader>
      </Header>

      <Content>
        <MealInfo
          numberInfo={bestSequence}
          description="melhor sequência de pratos dentro da dieta"
          backgroundColor={COLORS.GRAY_600}
        />
        <MealInfo
          numberInfo={totalMeals}
          description="refeições registradas"
          backgroundColor={COLORS.GRAY_600}
        />
        <ContainerMealInfo>
          <MealInfo
            numberInfo={positiveMeals}
            description="refeições dentro da dieta"
            backgroundColor={COLORS.GREEN_LIGHT}
            size="SMALL"
          />
          <MealInfo
            numberInfo={negativeMeals}
            description="refeições fora da dieta"
            backgroundColor={COLORS.RED_LIGHT}
            size="SMALL"
          />
        </ContainerMealInfo>
      </Content>
    </Container>
  );
}
