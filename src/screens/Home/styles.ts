import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;

    padding: 24px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600}
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_100};
    `}
`

export const Date = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `}
    margin-bottom: 8px; 
`