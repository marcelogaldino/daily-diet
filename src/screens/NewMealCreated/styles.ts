import { DietStatsStyleProps } from "@components/MealStats/styles";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

export const Title = styled.Text<DietStatsStyleProps>`
  text-align: center;

  ${({ theme, isOnDiet }) => css`
    font-size: ${theme.FONT_SIZE.FONT_24}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;

export const Description = styled.Text`
  text-align: center;

  margin-top: 8px;
  margin-bottom: 40px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_16}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Bold = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Image = styled.Image`
  margin-bottom: 32px;
`;
