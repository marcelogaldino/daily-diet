import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: 12px;
`

export const Profile = styled.View`
    width: 40px;
    height: 40px;

    border-radius: 40px;
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
`

export const ImageProfile = styled.Image`
    width: 36px;
    height: 36px;

    border-radius: 36px;
`