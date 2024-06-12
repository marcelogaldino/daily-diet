import { Container, Logo, ProfileImageContainer, ProfileImage } from "./styles";

import LogoImg from "@assets/logo/logo.png";

export function HeaderProfile() {
  return (
    <Container>
      <Logo source={LogoImg} />

      <ProfileImageContainer>
        <ProfileImage
          source={{ uri: "https://github.com/marcelogaldino.png" }}
        />
      </ProfileImageContainer>
    </Container>
  );
}
