import { ViewProps } from "react-native";
import { ButtonIcon } from "@components/ButtonIcon";

import { Container, ContainerCardInfo, Description, Title, IconContainer } from "./styles";
import { useTheme } from "styled-components";

type Props = ViewProps & {
    title: string
    description: string
    color: string
    hasIcon?: boolean
}

export function CardInfo({ title, description, color, hasIcon = false, ...rest }: Props) {
    const theme = useTheme()

    return (
        <Container color={color} {...rest}>
            {
                hasIcon &&
                <IconContainer>
                    <ButtonIcon
                        buttonIconName="arrow-up-right"
                        color={theme.COLORS.GREEN_DARK}
                    />
                </IconContainer>
            }
            <ContainerCardInfo>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </ContainerCardInfo>
        </Container >
    )
}