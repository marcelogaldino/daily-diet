import {
  Container,
  Description,
  Title,
  ArrowIconUpRight,
  ArrowIconUpRightButton,
  DietStatsStyleProps,
} from "./styles";

type Props = DietStatsStyleProps & {
  dietPercent: string;
};

export function MealStats({ dietPercent, isOnDiet }: Props) {
  return (
    <Container isOnDiet={isOnDiet}>
      <ArrowIconUpRightButton>
        <ArrowIconUpRight isOnDiet={isOnDiet} />
      </ArrowIconUpRightButton>
      <Title>{dietPercent}</Title>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
}
