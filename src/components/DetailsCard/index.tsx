import { TouchableOpacityProps } from 'react-native'
import {
    Container,
    ContainerIcon,
    ButtonIcon,
    PercentInfo,
    PercentInfoDescription,
    IconPositionStyleProps
} from './styles'

type Props = TouchableOpacityProps & IconPositionStyleProps & {
    percentInfo: string
    description: string
}

export function DetailsCard({ percentInfo, description, iconPosition, children, ...rest }: Props) {
    return (
        <Container>
            <ContainerIcon iconPosition={iconPosition}>
                <ButtonIcon {...rest}>
                    {children}
                </ButtonIcon>
            </ContainerIcon>
            <PercentInfo>{percentInfo}</PercentInfo>
            <PercentInfoDescription>{description}</PercentInfoDescription>
        </Container>
    )
}