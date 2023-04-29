import styled, { css } from "styled-components/native";

export type StatusStyleProps = {
    status: 'up' | 'down'
}

export const Container = styled.View`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.WHITE};
        border: 1px solid ${theme.COLORS.GRAY_300};
    `}
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 16px;
    border-radius: 6px;

    margin-bottom: 8px;
`

export const ContainerCardInfo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_600};
    `}
`

export const Time = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_700};
    `}
`

export const Separator = styled.View`
    height: 14px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

    margin: 0 12px;
`

export const Status = styled.View<StatusStyleProps>`
    width: 14px;
    height: 14px;

    border-radius: 7px;

    background-color: ${({ theme, status }) => status === 'down' ? theme.COLORS.RED_MID : theme.COLORS.GREEN_MID};
`
