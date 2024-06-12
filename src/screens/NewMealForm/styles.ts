import { ContainerSizeProps } from "@components/MealInfo/styles";
import { DietStatsStyleProps } from "@components/MealStats/styles";
import { ArrowLeft } from "phosphor-react-native";
import { Platform } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type InputPropsStyle = {
  size: ContainerSizeProps;
};

type InputMaskPropStyle = {
  isFocused: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const ArrowIconUpRightButton = styled.TouchableOpacity``;

export const ArrowIconUpRight = styled(ArrowLeft).attrs<DietStatsStyleProps>(
  ({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_100,
  })
)``;

export const TitleHeader = styled.Text`
  text-align: center;
  align-self: center;
  margin-left: 25%;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_18}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const KeyboardView = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
  keyboardVerticalOffset: 4,
})`
  flex: 1;
  margin-bottom: 20px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { alignItems: "center", paddingBottom: 100 },
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: -33px;
  padding: 24px;
`;

export const InputContainer = styled.View<InputPropsStyle>`
  width: ${({ size }) => (size === "LARGE" ? "98%" : "47%")};
  margin-bottom: 24px;

  justify-content: center;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.FONT_14}px;
  `}
`;

export const FlexRowContainer = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const Status = styled.View<DietStatsStyleProps>`
  width: 14px;
  height: 14px;

  border-radius: 7px;

  margin-right: 5px;

  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;

export const ContainerContent = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ButtonContainer = styled.View`
  width: 100%;
  margin-bottom: 22px;
`;

export const InputMask = styled(TextInputMask)<InputMaskPropStyle>`
  min-height: 48px;
  max-height: 48px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_16}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}

  border-radius: 6px;
  border: 1px solid
    ${({ theme, isFocused }) =>
      isFocused ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_500};
  margin-top: 4px;
  padding: 14px;
`;
