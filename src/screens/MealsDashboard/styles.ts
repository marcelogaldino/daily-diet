import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

import { DietStatsStyleProps } from "@components/MealStats/styles";

export const Container = styled(SafeAreaView)<DietStatsStyleProps>`
  flex: 1;

  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Header = styled.View`
  padding: 24px;
`;

export const ArrowIconUpRightButton = styled.TouchableOpacity`
  padding-top: 8px;
  padding-right: 8px;
  margin-bottom: -12px;
  align-items: flex-start;
`;

export const ArrowIconUpRight = styled(ArrowLeft).attrs<DietStatsStyleProps>(
  ({ theme, isOnDiet }) => ({
    size: 24,
    color: isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)``;

export const TitleHeader = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_32}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const DescriptionHeader = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_14}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: -40px;
  padding: 24px;
`;

export const ContainerMealInfo = styled.View`
  flex-direction: row;
  gap: 12px;
`;
