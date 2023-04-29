import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Loading = styled(ActivityIndicator).attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_700,
    size: 'large'
}))`
`

