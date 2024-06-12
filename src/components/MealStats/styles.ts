import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type DietStatsStyleProps = {
  isOnDiet?: boolean;
};

export const Container = styled.View<DietStatsStyleProps>`
  width: 100%;

  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  border-radius: 8px;
  margin-bottom: 40px;
  padding: 0 0 20px 16px;
`;

export const ArrowIconUpRightButton = styled.TouchableOpacity`
  padding-top: 8px;
  padding-right: 8px;
  margin-bottom: -12px;

  align-items: flex-end;
`;

export const ArrowIconUpRight = styled(ArrowUpRight).attrs<DietStatsStyleProps>(
  ({ theme, isOnDiet }) => ({
    size: 24,
    color: isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)``;

export const Title = styled.Text`
  text-align: center;
  margin-bottom: 2px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_32}px;
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
