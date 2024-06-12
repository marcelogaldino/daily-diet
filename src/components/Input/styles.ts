import { TextInput } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

type InputStyleProps = {
  isFocused: boolean;
};

export const Container = styled(TextInput)<InputStyleProps>`
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
