import { Status, StatusColorPropsStyle, StatusContainer } from "./styles";

type Props = StatusColorPropsStyle

export function StatusCircle({ backgroundColor, size }: Props) {
    return (
        <StatusContainer >
            <Status backgroundColor={backgroundColor} size={size} />
        </StatusContainer>
    )
}