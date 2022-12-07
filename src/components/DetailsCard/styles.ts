import styled, { css } from "styled-components/native"

export type IconPositionStyleProps = {
    iconPosition: "BEGIN" | "END"
}

export const Container = styled.View`
    width: 100%;

    padding: 12px 8px 20px 16px;
    margin-bottom: 32px;

    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT}
`

export const ContainerIcon = styled.View<IconPositionStyleProps>`
    width: 100%;
    flex-direction: row;
    justify-content: ${({ iconPosition }) => iconPosition === "BEGIN" ? 'flex-start' : 'flex-end'};
`

export const ButtonIcon = styled.TouchableOpacity``

export const PercentInfo = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XXXL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `}
`

export const PercentInfoDescription = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `}
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_100};
    `}
`