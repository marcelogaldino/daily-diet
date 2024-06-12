import { Button } from "@components/Button";
import { Container, Title, Description, Image, Bold } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteParams = {
  title: string;
  isOnDiet: boolean;
};

export function NewMealCreated() {
  const navigation = useNavigation();

  const route = useRoute();
  const { title, isOnDiet } = route.params as RouteParams;

  function handleNavigateHome() {
    navigation.navigate("home");
  }

  function DescriptionSuccess() {
    return (
      <Description>
        Você continua <Bold>dentro da dieta</Bold>. Muito bem!
      </Description>
    );
  }

  function DescriptionFailure() {
    return (
      <Description>
        Você <Bold>saiu da dieta</Bold> dessa vez, mas continue se esforçando e
        não desista!
      </Description>
    );
  }

  return (
    <Container>
      <Title isOnDiet={isOnDiet}>{title}</Title>
      <Description>
        {isOnDiet ? DescriptionSuccess() : DescriptionFailure()}
      </Description>
      <Image
        source={
          isOnDiet
            ? require("@assets/newMealCreated/success.png")
            : require("@assets/newMealCreated/failure.png")
        }
      />
      <Button
        title="Ir para a página inicial"
        type="SMALL"
        onPress={handleNavigateHome}
      />
    </Container>
  );
}
