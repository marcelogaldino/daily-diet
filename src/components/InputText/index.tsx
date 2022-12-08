import { Container, Label, Input, InputTextStylesProp } from './styles'

type Props = InputTextStylesProp & {
    label: string
}

export function InputText({ label, height, size }: Props) {
    return (
        <Container>
            <Label>{label}</Label>
            <Input height={height} size={size} />
        </Container>

    )
}