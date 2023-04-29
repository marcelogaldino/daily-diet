import { TouchableOpacityProps } from "react-native";
import { ButtonTypeProps, Container, Title } from "./styles";
import { ButtonIcon, ButtonIconNameProps } from "@components/ButtonIcon";
import { useTheme } from "styled-components";

type Props = TouchableOpacityProps & ButtonIconNameProps & {
    title: string
    type?: ButtonTypeProps
    hasIcon?: boolean
}

export function Button({ title, type = 'PRIMARY', hasIcon, iconName, ...rest }: Props) {
    const theme = useTheme()

    return (
        <Container type={type} {...rest}>
            {
                hasIcon &&
                <ButtonIcon buttonIconName={iconName} color={theme.COLORS.WHITE} />
            }
            <Title type={type}>{title}</Title>
        </Container>
    )
}