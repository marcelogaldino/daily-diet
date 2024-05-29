import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const ProfileImageContainer = styled.View`
  width: 40px;
  height: 40px;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 20px;
`;

export const ProfileImage = styled.Image`
  width: 36px;
  height: 36px;

  border-radius: 18px;
`;
