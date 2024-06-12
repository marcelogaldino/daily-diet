import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";
import { useState } from "react";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ inputRef, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  function handleFocus() {
    const hasFocus = inputRef?.current?.isFocused();
    if (hasFocus) {
      return setIsFocused(hasFocus);
    }
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <Container
      ref={inputRef}
      isFocused={isFocused}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...rest}
    />
  );
}
