import { DietStatsStyleProps } from "@components/MealStats/styles";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 49px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 12px;
  margin-top: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const StatusContainer = styled.View`
  justify-content: flex-end;
  padding: 18px;
`;

export const Time = styled.Text`
  margin: 0 12px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_12}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Separator = styled.View`
  height: 14px;
  margin-right: 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_16}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Status = styled.View<DietStatsStyleProps>`
  width: 14px;
  height: 14px;

  border-radius: 7px;

  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
