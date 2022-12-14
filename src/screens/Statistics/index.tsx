import { CardStatisticInfo } from '@components/CardStatisticInfo';
import { DetailsCard } from '@components/DetailsCard';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'phosphor-react-native';
import { StatusBar, Text, Modal } from 'react-native';
import { useTheme } from 'styled-components';
import {
    ContainerHeader,
    Scroll,
    ModalPage,
    ContainerModal,
    Title,
    TwoCardsAside
} from './styles';

export function Statistics() {
    const theme = useTheme()
    const navigation = useNavigation()

    function handleGoback() {
        navigation.goBack()
    }

    return (
        <>
            <ContainerHeader color={theme.COLORS.RED_LIGHT}>
                <StatusBar backgroundColor={theme.COLORS.RED_LIGHT} translucent />
                <DetailsCard
                    percentInfo='98,86%'
                    description='das Refeições dentro da dieta'
                    iconPosition='BEGIN'
                    color={theme.COLORS.RED_LIGHT}
                    onPress={handleGoback}
                >
                    <ArrowLeft size={24} color={theme.COLORS.RED_DARK} />
                </DetailsCard>
            </ContainerHeader>


            <ModalPage>
                <ContainerModal>
                    <Scroll>
                        <Title>Estatísticas gerais</Title>

                        <CardStatisticInfo
                            title='22'
                            description='melhor sequência de pratos dentro da dieta'
                            size='LG'
                        />

                        <CardStatisticInfo
                            title='109'
                            description='refeições registradas'
                            size='LG'
                        />

                        <TwoCardsAside>
                            <CardStatisticInfo
                                title='99'
                                description='refeições dentro da dieta'
                                size='SM'
                                color={theme.COLORS.GREEN_LIGHT}
                            />
                            <CardStatisticInfo
                                title='109'
                                description='refeições fora da dieta'
                                size='SM'
                                color={theme.COLORS.RED_LIGHT}
                            />
                        </TwoCardsAside>
                    </Scroll>
                </ContainerModal>
            </ModalPage>
        </>
    )
}