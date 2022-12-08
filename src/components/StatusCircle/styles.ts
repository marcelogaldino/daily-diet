import styled, { css } from "styled-components/native"

export type StatusColorPropsStyle = {
    backgroundColor: string
    size: "SM" | "LG"
}

export const StatusContainer = styled.View`
    width: 100%;
    
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`

export const Status = styled.View<StatusColorPropsStyle>`
    ${({ backgroundColor, size }) => css`
        width: ${size === "LG" ? 14 : 8}px;
        height: ${size === "LG" ? 14 : 8}px;
        border-radius: ${size === "LG" ? 7 : 4}px;

        background-color: ${backgroundColor};
    `}
`