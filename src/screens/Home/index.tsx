import { useTheme } from "styled-components/native";
import { Plus } from "phosphor-react-native";

import { MealStats } from "@components/MealStats";
import { HeaderProfile } from "@components/HeaderProfile";
import { Button } from "@components/Button";

import { Container, Title } from "./styles";

export function Home() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <HeaderProfile />
      <MealStats isOnDiet={false} dietPercent="40.96%" />
      <Title>Refeições</Title>
      <Button title="Nova refeição">
        <Plus color={COLORS.WHITE} />
      </Button>
    </Container>
  );
}
