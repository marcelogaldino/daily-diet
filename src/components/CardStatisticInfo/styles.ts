import styled, { css } from "styled-components/native";

export type CardStatisticInfoStyleProps = {
    color?: string
}

export const ContainerLG = styled.View<CardStatisticInfoStyleProps>`
    width: 100%;
    
    padding: 24px;
    border-radius: 8px;
    margin-bottom: 12px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme, color }) => color ? color : theme.COLORS.GRAY_600};
`

export const ContainerSM = styled.View<CardStatisticInfoStyleProps>`
    width: 48%;
    
    padding: 24px;
    border-radius: 8px;
    margin-bottom: 12px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme, color }) => color ? color : theme.COLORS.GRAY_600};
`


export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XXL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `}
    margin-bottom: 8px
`

export const Description = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `}
    text-align: center;
`