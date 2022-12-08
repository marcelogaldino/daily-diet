import { Button } from '@components/Button';
import { DetailsCard } from '@components/DetailsCard';
import { Header } from '@components/Header';
import { ListEmpty } from '@components/ListEmpty';
import { MealCard } from '@components/MealCard';
import { useNavigation } from '@react-navigation/native';
import { ArrowUpRight, Plus } from 'phosphor-react-native'
import { useState } from 'react';
import { SectionList } from 'react-native';
import { useTheme } from 'styled-components';
import {
    Container,
    Title,
    Date,
} from './styles';

export function Home() {
    const [meals, setMeals] = useState([
        {
            date: "12.08.22",
            data: ["Pizza", "Burger", "Risotto"]
        },
        {
            date: "13.08.22",
            data: ["Pizza", "Burger", "Risotto"]
        },
    ])

    const theme = useTheme()
    const navigation = useNavigation()

    function handleCreateNewMeal() {
        navigation.navigate('newmeal')
    }

    return (
        <Container >
            <Header />

            <DetailsCard
                percentInfo='90,86%'
                description='das refeições dentro da dieta'
                iconPosition='END'
                color={theme.COLORS.RED_LIGHT}
            >
                <ArrowUpRight size={24} color={theme.COLORS.RED_DARK} />
            </DetailsCard>

            <Title>Refeições</Title>
            <Button
                title='Nova refeição'
                hasIcon
                onPress={handleCreateNewMeal}
            >
                <Plus size={24} color={theme.COLORS.WHITE} weight="light" />
            </Button>


            <SectionList
                sections={meals}
                renderItem={({ item }) => (
                    <MealCard
                        title={item}
                        backgroundColor={theme.COLORS.RED_MID}
                        time='20:00'
                    />
                )}
                renderSectionHeader={({ section }) => (
                    <Date>{section.date}</Date>
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    meals.length === 0 && { flex: 1 }
                ]}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message='Você não possui refeições cadastradas!'
                    />
                )}
            />

        </Container>
    )
}