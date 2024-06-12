import { DietStatsStyleProps } from "@components/MealStats/styles";
import styled, { css } from "styled-components/native";

export type SelectableButtonStyleProps = {
  isActive?: "YES" | "NO" | "DEFAULT";
};

export const Container = styled.TouchableOpacity<SelectableButtonStyleProps>`
  min-height: 50px;
  max-height: 50px;

  background-color: ${({ theme, isActive }) =>
    isActive === "DEFAULT" && theme.COLORS.GRAY_600};

  ${({ theme, isActive }) =>
    isActive === "YES" &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_DARK};
      background-color: ${theme.COLORS.GREEN_LIGHT};
    `}

  ${({ theme, isActive }) =>
    isActive === "NO" &&
    css`
      border: 1px solid ${theme.COLORS.RED_DARK};
      background-color: ${theme.COLORS.RED_LIGHT};
    `}

    border-radius: 6px;
  margin-top: 8px;
`;

export const Title = styled.Text`
  text-align: center;
`;

export const Status = styled.View<DietStatsStyleProps>`
  width: 8px;
  height: 8px;

  border-radius: 7px;

  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const ButtonContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
