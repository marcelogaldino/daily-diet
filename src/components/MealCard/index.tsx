import { StatusCircle } from "@components/StatusCircle";
import { Container, MealInfoContainer, TimeInfo, Separator, Title } from "./styles";

type Props = {
    title: string,
    time: string
    backgroundColor: string
}

export function MealCard({ title, time, backgroundColor }: Props) {
    return (
        <Container>
            <MealInfoContainer>
                <TimeInfo>{time}</TimeInfo>
                <Separator>|</Separator>
                <Title>{title}</Title>
            </MealInfoContainer>

            <StatusCircle
                backgroundColor={backgroundColor}
                size="LG"
            />
        </Container>
    )
}