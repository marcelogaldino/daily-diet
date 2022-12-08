import { TouchableOpacityProps } from 'react-native'
import {
    Container,
    ContainerIcon,
    ButtonIcon,
    PercentInfo,
    PercentInfoDescription,
    IconPositionStyleProps,
    ColorStyleProps
} from './styles'

type Props = TouchableOpacityProps & IconPositionStyleProps & ColorStyleProps & {
    percentInfo: string
    description: string
}

export function DetailsCard({ percentInfo, description, iconPosition, color, children, ...rest }: Props) {
    return (
        <Container color={color}>
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