import styled from "styled-components"

export const Container = styled.button `

    button {
        font-size: 1rem;
        background: var(--blue-light);
        color: #fff;
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 65rem;
        margin-top: 4rem;
        position: absolute;
        

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }

    }
`