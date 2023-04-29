import { Image } from 'react-native'
import { Container, Profile, ImageProfile } from './styles'

import Logo from '@assets/logo.png'

export function HeaderProfile() {
    return (
        <Container>
            <Image source={Logo} />
            <Profile>
                <ImageProfile
                    source={
                        {
                            uri: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                        }
                    }
                />
            </Profile>
        </Container>
    )
}