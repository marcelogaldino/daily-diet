import { ButtonIcon } from "@components/ButtonIcon";
import { Container, ButtonIconContainer, InfoContainer, Title, Description } from "./styles";
import { useTheme } from "styled-components";

type Props = {
    title: string
    description: string
}

export function HeaderInfo({ title, description }: Props) {
    const theme = useTheme()

    return (
        <Container>
            <ButtonIconContainer>
                <ButtonIcon buttonIconName="arrow-left" color={theme.COLORS.GREEN_DARK} />
            </ButtonIconContainer>

            <InfoContainer>
                <Title>{title}</Title>

                <Description>{description}</Description>
            </InfoContainer>
        </Container>
    )
}