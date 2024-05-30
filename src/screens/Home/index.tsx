import { useState } from "react";
import { SectionList, StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";
import { Plus } from "phosphor-react-native";

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

  const { COLORS } = useTheme();

  return (
    <Container>
      <HeaderProfile />
      <MealStats isOnDiet={false} dietPercent="40.96%" />
      <Title>Refeições</Title>
      <Button title="Nova refeição">
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
