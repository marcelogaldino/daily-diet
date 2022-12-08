import { Button } from '@components/Button';
import { ArrowLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components';
import {
    ContainerHeader,
    ButtonIcon,
    Title,
    ModalPage,
    ContainerModal,
    Scroll,
    ContainerButton,
    ContnainerSplit,
} from './styles';

import { InputText } from '@components/InputText'
import { StatusCircle } from '@components/StatusCircle';

export function NewMeal() {
    const theme = useTheme()

    return (
        <>
            <ContainerHeader>
                <ButtonIcon>
                    <ArrowLeft size={24} color={theme.COLORS.GRAY_100} />
                </ButtonIcon>
                <Title>Nova refeição</Title>
            </ContainerHeader>

            <ModalPage>
                <ContainerModal>
                    <Scroll>
                        <InputText
                            label='Nome'
                            height={48}
                            size="LG"
                        />

                        <InputText
                            label='Descrição'
                            height={120}
                            size="LG"
                        />
                        <ContnainerSplit>
                            <InputText
                                label='Data'
                                height={48}
                                size="SM"
                            />

                            <InputText
                                label='Hora'
                                height={48}
                                size="SM"
                            />
                        </ContnainerSplit>

                    </Scroll>
                    <ContainerButton>

                        <Button title='Cadastrar refeição' />
                    </ContainerButton>
                </ContainerModal>

            </ModalPage>
        </>
    )
}