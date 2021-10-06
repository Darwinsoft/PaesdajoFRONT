import styled from "styled-components";

export const Container = styled.div `
    margin-top: 7rem;

    table {
        width: 100%;
        border-spacing: 0 0.3rem;

        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;

        th {
            background: var(--table-head);
            color: var(--text-body);
            font-weight: 500;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;
        }
    }
`   