import { Platform, SafeAreaView, StatusBar } from "react-native";
import styled, { css } from "styled-components/native";

export type BackgroundColorStylesProp = {
    color: string
}

export const ContainerHeader = styled(SafeAreaView) <BackgroundColorStylesProp>`
    height: 30%;
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
    background-color: ${({ color }) => color};
`

export const ContainerModal = styled.View`
    height: 108%;
    margin-top: auto;
    padding: 24px;
    border-radius: 28px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Scroll = styled.ScrollView``

export const ModalPage = styled.View``

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `}
    text-align: center;
    margin: 18px 0;
`

export const TwoCardsAside = styled.View`
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
`