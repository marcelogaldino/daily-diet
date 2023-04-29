import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 0.8;

    padding: 12px 24px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const ButtonIconContainer = styled.View``

export const InfoContainer = styled.View`

`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XXXL}px;
        color: ${theme.COLORS.GRAY_700};
    `}
    text-align: center;
`

export const Description = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_600};
    `}
    text-align: center;
`