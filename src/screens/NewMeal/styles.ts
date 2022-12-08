import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const ContainerHeader = styled(SafeAreaView)`
    height: 20%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    margin-bottom: 24px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export const ButtonIcon = styled.TouchableOpacity`
    padding-left: 24px;
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
    `}
    margin-left: 100px;
`

export const ContainerModal = styled.View`
    height: 106%;
    margin-top: auto;
    padding: 24px;
    border-radius: 28px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Scroll = styled.ScrollView``

export const ModalPage = styled.View``

export const ContainerButton = styled.View`
    flex: 1;
    margin-top: -250px;
`

export const ContnainerSplit = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const Input = styled.TextInput`
    width: 48%;

    padding: 14px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 6px;
    margin-top: 6px;
    margin-bottom: 32px;
`

export const Label = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_200};
    `}
`

export const ContainerLabel = styled.Text`

    border: 1px solid red;
`