import styled from "styled-components";


export const Container = styled.main`
    max-width: 938px;
    display: flex;
    flex-wrap:wrap;
    margin: 116px auto 220px auto;
    justify-content: center;
    align-items: stretch;
    gap: 8px;

    @media(max-width: 430px) {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    


`