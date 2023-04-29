import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 5; 
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT}
`

export const ContainerPage = styled.View`
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    padding: 0 24px;
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_700};    
    `}
    text-align: center;
    margin-top: 32px
`

export const ContainerFlexRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`