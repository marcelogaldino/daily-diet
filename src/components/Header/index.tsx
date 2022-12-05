import { Container, ImageProfile, Logo, Profile } from './styles';

import logoImg from '@assets/logo.png'

const image = { uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" }

export function Header() {
    return (
        <Container >
            <Logo source={logoImg} />
            <Profile >
                <ImageProfile source={image} />
            </Profile>
        </Container>
    )
}