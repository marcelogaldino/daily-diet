import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const ContainerPage = styled.View`
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    padding: 0 24px;

    margin-top: 24px;
`
export const Form = styled.View`
    margin-top: 40px;
`

export const InputFormContainer = styled.View``

export const Label = styled.Text``

export const Input = styled.TextInput``


