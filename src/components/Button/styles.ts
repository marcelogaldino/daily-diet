import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: ButtonTypeProps
}

export const Container = styled(TouchableOpacity) <Props>`
    ${({ theme, type }) => css`
        background-color: ${type === 'PRIMARY' ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};
        border-width: ${type === 'PRIMARY' ? 0 : `1px`};
        border-style: solid;
        border-color: ${type === 'PRIMARY' && theme.COLORS.GRAY_700};
    `}
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 6px;
    padding: 16px 24px;
`

export const Title = styled.Text<Props>`
    ${({ theme, type }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};

        color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
    `}
    margin-left: 12px;
`