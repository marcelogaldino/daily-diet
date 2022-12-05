import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;

    margin-top: 32px;
    margin-bottom: 32px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`

export const Profile = styled.View`
    width: 40px;
    height: 40px;

    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
`

export const ImageProfile = styled.ImageBackground.attrs({
    resizeMode: "cover",
    borderRadius: 50
})`
    flex: 1;
`