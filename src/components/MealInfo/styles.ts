import styled, { css } from "styled-components/native";

type ContainerStyleProps = {
  color: string;
  size?: "LARGE" | "SMALL";
};

export const Container = styled.View<ContainerStyleProps>`
  width: ${({ size }) => (size === "LARGE" ? "100%" : "48%")};

  background-color: ${({ color }) => color};

  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const MainInfo = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_24}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Description = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_14}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;
