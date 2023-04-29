import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 24px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Title = styled.Text`
     ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_700};
    `}

    margin: 40px 0 8px 0;
`

export const MainInfo = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${theme.COLORS.GRAY_700};
    `}
    margin: 32px 0 12px 0;
`