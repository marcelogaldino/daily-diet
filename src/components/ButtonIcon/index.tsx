import { TouchableOpacityProps } from 'react-native';
import { ArrowLeft, ArrowUpRight, Plus } from 'phosphor-react-native'

import { Container } from "./styles";

export type ButtonIconNameProps = {
    iconName?: 'arrow-left' | 'arrow-up-right' | 'plus'
}

type Props = TouchableOpacityProps & {
    buttonIconName: 'arrow-left' | 'arrow-up-right' | 'plus'
    color: string
}

export function ButtonIcon({ buttonIconName, color, ...rest }: Props) {

    function getIcon(name: string) {
        switch (name) {
            case 'arrow-left':
                return <ArrowLeft color={color} />
            case 'arrow-up-right':
                return <ArrowUpRight color={color} />
            case 'plus':
                return <Plus color={color} />
            default:
                break;
        }
    }

    return (
        <Container {...rest}>
            {buttonIconName && getIcon(buttonIconName)}
        </Container>
    )
}