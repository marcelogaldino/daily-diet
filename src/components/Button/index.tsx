import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  iconName?: string;
  isDisabled?: boolean;
};

export function Button({
  title,
  type = "LARGE",
  children,
  isDisabled,
  ...rest
}: Props) {
  return (
    <Container type={type} isDisabled={isDisabled} {...rest}>
      {children}
      <Title isDisabled={isDisabled}>{title}</Title>
    </Container>
  );
}
