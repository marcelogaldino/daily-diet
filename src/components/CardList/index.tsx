import { DietStatsStyleProps } from "@components/MealStats/styles";
import {
  Container,
  InfoContainer,
  Time,
  Separator,
  Title,
  Status,
  StatusContainer,
} from "./styles";

export type Meal = {
  meal: string;
  time: string;
  isOnDiet: boolean;
};

type Props = Meal;

export function CardList({ meal, time, isOnDiet }: Props) {
  return (
    <Container>
      <InfoContainer>
        <Time>{time}</Time>
        <Separator />
        <Title>{meal}</Title>
      </InfoContainer>
      <StatusContainer>
        <Status isOnDiet={isOnDiet} />
      </StatusContainer>
    </Container>
  );
}
