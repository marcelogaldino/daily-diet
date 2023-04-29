import { SectionList } from "react-native";
import { useTheme } from "styled-components";

import { HeaderProfile } from "@components/HeaderProfile";
import { CardInfo } from "@components/CardInfo";
import { Button } from "@components/Button";
import { CardMeal } from "@components/CardMeal";

import { Container, Title, MainInfo } from "./styles";

export function Home() {
    const theme = useTheme()

    const DATA = [
        {
            title: '23.04.23',
            data: [
                {
                    time: '09:00',
                    description: 'Pizza'
                },
                {
                    time: '10:00',
                    description: 'Burger'
                },
                {
                    time: '11:00',
                    description: 'Risotto'
                },
            ]
        },
        {
            title: '24.04.23',
            data: [
                {
                    time: '12:00',
                    description: 'French Fries'
                },
                {
                    time: '13:00',
                    description: 'Onion Rings'
                },
                {
                    time: '14:00',
                    description: 'Fried Shrimps'
                },
            ]
        },
        {
            title: '25.04.23',
            data: [
                {
                    time: '12:00',
                    description: 'Water'
                },
                {
                    time: '13:00',
                    description: 'Coke'
                },
                {
                    time: '14:00',
                    description: 'Beer'
                },
            ]
        },
        {
            title: '26.04.23',
            data: [
                {
                    time: '15:00',
                    description: 'Cheese Cake'
                },
                {
                    time: '16:00',
                    description: 'Ice Cream'
                },
                {
                    time: '17:00',
                    description: 'Beer'
                },
            ]
        },
    ];


    return (
        <Container>
            <HeaderProfile />
            <CardInfo
                title="90,86%"
                description="das refeições dentro da dieta"
                color={theme.COLORS.GREEN_LIGHT}
                hasIcon
            />

            <Title>Refeições</Title>
            <Button title="Nova refeição" type="PRIMARY" hasIcon iconName="plus" />

            <SectionList
                sections={DATA}
                keyExtractor={item => item.description}
                renderItem={({ item }) => (
                    <CardMeal hour={item.time} status="up" title={item.description} />
                )}
                renderSectionHeader={({ section }) => (
                    <MainInfo>{section.title}</MainInfo>
                )}
                showsVerticalScrollIndicator={false}
            />

        </Container>
    )
}