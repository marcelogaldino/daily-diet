import { ContainerLG, ContainerSM, Title, Description, CardStatisticInfoStyleProps } from './styles'

type Props = CardStatisticInfoStyleProps & {
    title: string
    description: string
    size: 'SM' | 'LG'
}

export function CardStatisticInfo({ title, description, color, size }: Props) {
    return (
        <>
            {size === 'LG' ? (
                <ContainerLG color={color}>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </ContainerLG>
            ) : (

                <ContainerSM color={color}>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </ContainerSM>
            )}
        </>
    )
}