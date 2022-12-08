import styled, { css } from "styled-components/native"

export type InputTextStylesProp = {
    height: number
    size: 'SM' | 'LG'
}

export const Container = styled.View`
`

export const Label = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_200};
    `}
`

export const Input = styled.TextInput<InputTextStylesProp>`
    width: ${({ size }) => size === "LG" ? 327 : 158}px;
    height: ${({ height }) => height}px;
    padding: 14px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 6px;
    margin-top: 6px;
    margin-bottom: 32px;
`