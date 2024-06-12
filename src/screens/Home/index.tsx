import { useEffect, useState } from "react";
import { SectionList } from "react-native";
import { useTheme } from "styled-components/native";
import { Plus } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

import { MealStats } from "@components/MealStats";
import { HeaderProfile } from "@components/HeaderProfile";
import { Button } from "@components/Button";
import { CardList, Meal } from "@components/CardList";

import { Container, Title, SectionTitle } from "./styles";

interface StoredMeal {
  date: string;
  data: Meal[];
}

export function Home() {
  const [negativeMeals, setNegativeMeals] = useState(0);
  const [positiveMeals, setPositiveMeals] = useState(0);
  const [percentageIsOnDietStats, setPercentageIsOnDietStats] = useState(false);
  const [percentageStats, setPercentageStats] = useState("");
  const [mealsData, setMealsData] = useState<StoredMeal[]>([
    {
      date: "12.08.23",
      data: [
        {
          meal: "Pizzza",
          time: "12:00",
          isOnDiet: false,
        },
        {
          meal: "Pizza",
          time: "12:00",
          isOnDiet: false,
        },
        {
          meal: "Hamburguer",
          time: "12:00",
          isOnDiet: false,
        },
      ],
    },
    {
      date: "10.08.23",
      data: [
        {
          meal: "Salada",
          time: "12:00",
          isOnDiet: true,
        },
        {
          meal: "Bolo",
          time: "12:00",
          isOnDiet: true,
        },
      ],
    },
  ]);

  const navigation = useNavigation();
  const { COLORS } = useTheme();

  function dietPercentage(partial: number) {
    const negativeMealsCounter = mealsData.reduce(
      (accumulator, currentValue) => {
        currentValue.data.map((meal) => {
          if (!meal.isOnDiet) {
            return (accumulator += 1);
          }
        });
        return accumulator;
      },
      0
    );

    const positiveMealsCounter = mealsData.reduce(
      (accumulator, currentValue) => {
        currentValue.data.map((meal) => {
          if (meal.isOnDiet) {
            return (accumulator += 1);
          }
        });
        return accumulator;
      },
      0
    );
    setNegativeMeals(negativeMealsCounter);
    setPositiveMeals(positiveMealsCounter);
    const percentage = (partial / (negativeMeals + positiveMeals)) * 100;
    const percentageFormated = percentage.toFixed(2).replace(".", ",");
    percentage >= 50
      ? setPercentageIsOnDietStats(true)
      : setPercentageIsOnDietStats(false);
    setPercentageStats(percentageFormated);
  }

  function handleNavigateToDashboard() {
    navigation.navigate("dashboard", {
      bestSequence: 20,
      isOnDiet: percentageIsOnDietStats,
      negativeMeals,
      positiveMeals,
      percentageStats,
      totalMeals: positiveMeals + negativeMeals,
    });
  }

  function handleCreateMeal() {
    navigation.navigate("newMealForm");
  }

  useEffect(() => {
    dietPercentage(positiveMeals);
  }, [percentageStats]);

  return (
    <Container>
      <HeaderProfile />
      <MealStats
        isOnDiet={percentageIsOnDietStats}
        dietPercent={percentageStats}
        onPressIconButton={handleNavigateToDashboard}
      />
      <Title>Refeições</Title>
      <Button title="Nova refeição" onPress={handleCreateMeal}>
        <Plus color={COLORS.WHITE} />
      </Button>
      <SectionList
        sections={mealsData}
        keyExtractor={(item) => item.meal}
        renderItem={({ item }) => (
          <CardList
            meal={item.meal}
            isOnDiet={item.isOnDiet}
            time={item.time}
          />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <SectionTitle>{date}</SectionTitle>
        )}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={{ paddingBottom: 100, marginTop: 32 }}
      />
    </Container>
  );
}
