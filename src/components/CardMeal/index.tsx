import { Container, ContainerCardInfo, Time, Title, Status, Separator, StatusStyleProps } from "./styles";

type Props = StatusStyleProps & {
    title: string
    hour: string
}

export function CardMeal({ title, hour, status }: Props) {

    return (
        <Container >
            <ContainerCardInfo>
                <Time>{hour}</Time>
                <Separator />
                <Title>{title}</Title>
            </ContainerCardInfo>
            <Status status={status} />
        </Container >
    )
}