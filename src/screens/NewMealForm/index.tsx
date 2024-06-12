import { useEffect, useRef, useState } from "react";
import {
  Platform,
  Pressable,
  View,
  Button as DefaultButton,
  TextInput,
} from "react-native";
import { useTheme } from "styled-components/native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { SelectableButton } from "@components/SelectableButton";
import { SelectableButtonStyleProps } from "@components/SelectableButton/styles";

import {
  Container,
  Content,
  Header,
  ArrowIconUpRightButton,
  ArrowIconUpRight,
  TitleHeader,
  InputContainer,
  Label,
  FlexRowContainer,
  ContainerContent,
  ButtonContainer,
  InputMask,
  KeyboardView,
} from "./styles";
import { TextInputMask } from "react-native-masked-text";

export function NewMealForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dateInputIsFocused, setDateInputIsFocused] = useState(false);
  const [timeInputIsFocused, setTimeInputIsFocused] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isOnDietActive, setIsOnDietActive] =
    useState<SelectableButtonStyleProps>({ isActive: "DEFAULT" });
  const [isNotOnDietActive, setIsNotOnDietActive] =
    useState<SelectableButtonStyleProps>({ isActive: "DEFAULT" });

  const navigation = useNavigation();

  const theme = useTheme();

  const newMealNameInputRef = useRef<TextInput>(null);
  const newMealDescriptionInputRef = useRef<TextInput>(null);

  function handleDateInputFocus() {
    return setDateInputIsFocused(true);
  }

  function handleDateInputBlur() {
    setDateInputIsFocused(false);
  }

  function handleTimeInputFocus() {
    return setTimeInputIsFocused(true);
  }

  function handleTimeInputBlur() {
    setTimeInputIsFocused(false);
  }

  function handleNavigationBack() {
    navigation.goBack();
  }

  function handleIsOnDiet() {
    setIsOnDietActive({ isActive: "YES" });
    setIsNotOnDietActive({ isActive: "DEFAULT" });
  }

  function handleIsNotOnDiet() {
    setIsNotOnDietActive({ isActive: "NO" });
    setIsOnDietActive({ isActive: "DEFAULT" });
  }

  function handleDate(date: string) {
    setDate(date);
  }

  function handleTime(time: string) {
    setTime(time);
  }

  function handleName(name: string) {
    setName(name);
  }

  function handleDescription(description: string) {
    setDescription(description);
  }

  useEffect(() => {
    if (
      date === "" ||
      name === "" ||
      time === "" ||
      description === "" ||
      (isOnDietActive.isActive === "DEFAULT" &&
        isNotOnDietActive.isActive === "DEFAULT")
    ) {
      return setIsButtonDisabled(true);
    }
    setIsButtonDisabled(false);
  }, [
    date,
    name,
    time,
    description,
    isNotOnDietActive.isActive,
    isOnDietActive.isActive,
  ]);

  function handleCreateMeal() {
    navigation.navigate("newMealCreated", {
      title:
        isOnDietActive.isActive === "YES" ? "Continue assim!" : "Que pena!",
      isOnDiet: isOnDietActive.isActive === "YES",
    });
  }

  return (
    <Container>
      <Header>
        <ArrowIconUpRightButton onPress={handleNavigationBack}>
          <ArrowIconUpRight />
        </ArrowIconUpRightButton>
        <TitleHeader>Nova refeição</TitleHeader>
      </Header>
      <KeyboardView>
        <Content>
          <ContainerContent>
            <FlexRowContainer>
              <InputContainer size="LARGE">
                <Label>Nome</Label>
                <Input
                  onChangeText={handleName}
                  value={name}
                  autoCorrect={false}
                  autoCapitalize="words"
                  returnKeyType="done"
                  inputRef={newMealNameInputRef}
                />
              </InputContainer>
            </FlexRowContainer>

            <FlexRowContainer>
              <InputContainer size="LARGE">
                <Label>Descrição</Label>
                <Input
                  onChangeText={handleDescription}
                  value={description}
                  multiline
                  textAlignVertical="top"
                  inputRef={newMealDescriptionInputRef}
                  style={{
                    minHeight: 120,
                    maxHeight: 120,
                  }}
                />
              </InputContainer>
            </FlexRowContainer>

            <FlexRowContainer>
              <InputContainer size="SMALL">
                <Label>Data</Label>
                <InputMask
                  type={"datetime"}
                  options={{
                    format: "DD/MM/YYYY",
                  }}
                  value={date}
                  onChangeText={handleDate}
                  keyboardType="number-pad"
                  placeholder="DD/MM/YYYY"
                  placeholderTextColor={theme.COLORS.GRAY_400}
                  maxLength={10}
                  onFocus={handleDateInputFocus}
                  onBlur={handleDateInputBlur}
                  isFocused={dateInputIsFocused}
                />
              </InputContainer>

              <InputContainer size="SMALL">
                <Label>Hora</Label>
                <InputMask
                  type={"datetime"}
                  options={{
                    format: "HH:mm",
                  }}
                  value={time}
                  onChangeText={handleTime}
                  keyboardType="number-pad"
                  placeholder="hh:mm"
                  placeholderTextColor={theme.COLORS.GRAY_400}
                  maxLength={5}
                  onFocus={handleTimeInputFocus}
                  onBlur={handleTimeInputBlur}
                  isFocused={timeInputIsFocused}
                />
              </InputContainer>
            </FlexRowContainer>

            <FlexRowContainer>
              <InputContainer size="SMALL">
                <Label>Está dentro da dieta ?</Label>
                <SelectableButton
                  title="Sim"
                  onPress={handleIsOnDiet}
                  isActive={isOnDietActive.isActive}
                  isOnDiet={true}
                  activeOpacity={0.7}
                />
              </InputContainer>

              <InputContainer size="SMALL">
                <Label>{""}</Label>
                <SelectableButton
                  title="Não"
                  onPress={handleIsNotOnDiet}
                  isActive={isNotOnDietActive.isActive}
                  isOnDiet={false}
                  activeOpacity={0.7}
                />
              </InputContainer>
            </FlexRowContainer>
          </ContainerContent>
          <ButtonContainer>
            <Button
              title="Cadastrar refeição"
              onPress={handleCreateMeal}
              isDisabled={isButtonDisabled}
              disabled={isButtonDisabled}
              activeOpacity={0.7}
            />
          </ButtonContainer>
        </Content>
      </KeyboardView>
    </Container>
  );
}
