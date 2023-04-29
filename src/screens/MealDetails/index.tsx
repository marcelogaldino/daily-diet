import { HeaderInfo } from "@components/HeaderInfo";
import { Container, ContainerPage, Title, ContainerFlexRow } from "./styles";
import { CardInfo } from "@components/CardInfo";
import { useTheme } from "styled-components/native";


export function MealDetails() {
    const theme = useTheme()

    return (
        <>
            <HeaderInfo title="80.96%" description="das refeicoes dentro da dieta" />
            <Container>
                <ContainerPage>
                    <Title>Estatísticas gerais</Title>

                    <CardInfo color={theme.COLORS.GRAY_200} title="22" description="melhor sequência de pratos dentro da dieta" style={{ padding: 16 }} />
                    <CardInfo color={theme.COLORS.GRAY_200} title="109" description="refeições registradas" style={{ padding: 16 }} />

                    <ContainerFlexRow>
                        <CardInfo color={theme.COLORS.GREEN_LIGHT} title="99" description="refeições dentro da dieta" style={{ padding: 16, width: '49%', marginRight: 8 }} />
                        <CardInfo color={theme.COLORS.RED_LIGHT} title="10" description="refeições fora da dieta" style={{ padding: 16, width: '50%' }} />
                    </ContainerFlexRow>

                </ContainerPage>
            </Container>
        </>
    )
}