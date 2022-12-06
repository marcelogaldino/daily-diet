import { Header } from '@components/Header';
import { ArrowUpRight } from 'phosphor-react-native'
import { useTheme } from 'styled-components';
import { Container, DetailsCard, ContainerIcon, ButtonIcon, PercentInfo, PercentInfoDescription } from './styles';

export function Home() {
    const theme = useTheme()

    return (
        <Container >
            <Header />
            <DetailsCard>
                <ContainerIcon>
                    <ButtonIcon>
                        <ArrowUpRight size={24} color={theme.COLORS.GREEN_DARK} />
                    </ButtonIcon>
                </ContainerIcon>
                <PercentInfo>90,86%</PercentInfo>
                <PercentInfoDescription>das refeições dentro da dieta</PercentInfoDescription>
            </DetailsCard>
        </Container>
    )
}