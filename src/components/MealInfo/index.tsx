import { Container, MainInfo, Description } from "./styles";

type Props = {
  numberInfo: number;
  description: string;
  backgroundColor: string;
  size?: "LARGE" | "SMALL";
};

export function MealInfo({
  numberInfo,
  description,
  backgroundColor,
  size = "LARGE",
}: Props) {
  return (
    <Container color={backgroundColor} size={size}>
      <MainInfo>{numberInfo}</MainInfo>
      <Description>{description}</Description>
    </Container>
  );
}
