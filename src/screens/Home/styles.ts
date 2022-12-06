import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;

    padding: 24px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600}
`

export const DetailsCard = styled.View`
    width: 100%;

    padding: 12px 8px 20px 16px;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT}
`

export const ContainerIcon = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
`

export const ButtonIcon = styled.TouchableOpacity``

export const PercentInfo = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XXXL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `}
`

export const PercentInfoDescription = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`