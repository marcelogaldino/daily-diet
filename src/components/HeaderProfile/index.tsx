import { Container, Logo, ProfileImageContainer, ProfileImage } from "./styles";

import LogoImg from "@assets/logo.png";

export function HeaderProfile() {
  return (
    <Container>
      <Logo source={LogoImg} />

      <ProfileImageContainer>
        <ProfileImage
          source={{ uri: "https://github.com/marcelogaldino.png" }}
          // width={40}
          // height={40}
        />
      </ProfileImageContainer>
    </Container>
  );
}
