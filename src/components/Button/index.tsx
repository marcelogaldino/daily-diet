import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

type Props = TouchableOpacityProps & {
    title: string,
    hasIcon?: boolean
}

export function Button({ title, hasIcon = false, children, ...rest }: Props) {
    return (
        <Container {...rest}>
            {children}
            <Title hasIcon={hasIcon} >{title}</Title>
        </Container>
    )
}