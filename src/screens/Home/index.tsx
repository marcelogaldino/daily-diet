import { MealStats } from "@components/MealStats";
import { HeaderProfile } from "@components/HeaderProfile";
import { Container, Title } from "./styles";

export function Home() {
  return (
    <Container>
      <HeaderProfile />
      <MealStats isOnDiet={false} dietPercent="40.96%" />
      <Title>Refeições</Title>
    </Container>
  );
}
