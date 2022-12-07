import styled, { css } from "styled-components/native";

export type StatusColorPropsStyle = {
    backgroundColor: string
}

export const Container = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;

    border-radius: 6px;
    margin-bottom: 12px;
    padding: 14px 16px 14px 12px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
`

export const MealInfoContainer = styled.View`
    width: 32%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const TimeInfo = styled.Text`
       ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `}
`

export const Separator = styled.Text`
color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `}
`

export const StatusContainer = styled.View`
    width: 100%;
    
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`

export const Status = styled.View<StatusColorPropsStyle>`
    ${({ backgroundColor }) => css`
        width: 14px;
        height: 14px;
        border-radius: 7px;

        background-color: ${backgroundColor};
    `}
`