import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  iconName?: string;
};

export function Button({ title, type = "LARGE", children, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {children}
      <Title>{title}</Title>
    </Container>
  );
}
