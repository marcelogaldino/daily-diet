import { TouchableOpacityProps } from "react-native";
import {
  Container,
  SelectableButtonStyleProps,
  Title,
  Status,
  ButtonContent,
} from "./styles";
import { DietStatsStyleProps } from "@components/MealStats/styles";

type Props = TouchableOpacityProps &
  SelectableButtonStyleProps &
  DietStatsStyleProps & {
    title: string;
  };

export function SelectableButton({
  title,
  isActive = "DEFAULT",
  isOnDiet,
  ...rest
}: Props) {
  return (
    <Container {...rest} isActive={isActive}>
      <ButtonContent>
        <Status isOnDiet={isOnDiet} />
        <Title>{title}</Title>
      </ButtonContent>
    </Container>
  );
}
