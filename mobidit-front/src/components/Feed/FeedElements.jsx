import { styled } from "styled-components";

export const FeedContainer = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`

export const FeedHeader = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FeedTitle = styled.h1`
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 30px;
    color: #FF5A5F;
`

export const FeedContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FeedMenu = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 100%;
    position: absolute;
    margin-left: 10px;
    margin-top: 10px;
`
