import { Container, MealInfoContainer, TimeInfo, Separator, Title, Status, StatusContainer, StatusColorPropsStyle } from "./styles";

type Props = StatusColorPropsStyle & {
    title: string,
    time: string
}

export function MealCard({ title, time, backgroundColor }: Props) {
    return (
        <Container>
            <MealInfoContainer>
                <TimeInfo>{time}</TimeInfo>
                <Separator>|</Separator>
                <Title>{title}</Title>
            </MealInfoContainer>

            <StatusContainer>
                <Status backgroundColor={backgroundColor} />
            </StatusContainer>
        </Container>
    )
}