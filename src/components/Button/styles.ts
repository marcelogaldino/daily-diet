import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = "SMALL" | "LARGE";

type Props = {
  type?: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: ${({ type }) => (type === "SMALL" ? "70%" : "100%")};
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  margin-top: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Title = styled.Text`
  margin-left: 14px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.FONT_14}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;
