import { View } from "react-native";
import styled, { css } from "styled-components/native";

type ViewStyleProps = {
    color: string
}

export const Container = styled(View) <ViewStyleProps>`
    width: 100%;
    background-color: ${({ color }) => color};

    margin-top: 32px;
    
    border-radius: 8px;
`

export const ContainerCardInfo = styled.View`
    padding: 0 16px 24px;
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XXXL}px;
        color: ${theme.COLORS.GRAY_700};
    `}
    text-align: center
`

export const Description = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_600};
    `}
    text-align: center
`

export const IconContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;

    padding: 8px 8px 0 0;
`
