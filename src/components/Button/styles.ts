import styled, { css } from "styled-components/native";

type Props = {
    hasIcon?: boolean
}

export const Container = styled.TouchableOpacity`
    width: 100%;

    margin-top: 12px;
    margin-bottom: 32px;
    padding: 16px 24px;
    border-radius: 6px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const Title = styled.Text<Props>`
       ${({ theme, hasIcon }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.WHITE};
        margin-left: ${hasIcon ? 12 : 0}px;
    `}
`