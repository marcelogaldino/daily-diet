import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = "SMALL" | "LARGE";

type Props = {
  type?: ButtonTypeStyleProps;
  isDisabled?: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: ${({ type }) => (type === "SMALL" ? "70%" : "100%")};
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  margin-top: 8px;
  background-color: ${({ theme, isDisabled }) =>
    isDisabled ? theme.COLORS.GRAY_600 : theme.COLORS.GRAY_200};
`;

export const Title = styled.Text<Props>`
  margin-left: 14px;

  ${({ theme, isDisabled }) => css`
    font-size: ${theme.FONT_SIZE.FONT_14}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${isDisabled ? theme.COLORS.GRAY_400 : theme.COLORS.WHITE};
  `}
`;
