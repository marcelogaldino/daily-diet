import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;

    padding: 24px;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600}
`