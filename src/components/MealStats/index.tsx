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
  onPressIconButton: () => void;
};

export function MealStats({ dietPercent, isOnDiet, onPressIconButton }: Props) {
  return (
    <Container isOnDiet={isOnDiet}>
      <ArrowIconUpRightButton onPress={onPressIconButton}>
        <ArrowIconUpRight isOnDiet={isOnDiet} />
      </ArrowIconUpRightButton>
      <Title>{dietPercent}%</Title>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
}
