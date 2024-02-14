// Style your elements here

// MainContainer,
//   Heading,
//   Img,
//   Description,

import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const Heading = styled.h1`
color: #1e293b;
font-family: Roboto;
margin-bottom: 10px;

`

export const Para = styled.p`
color: #334155;
margin-top: 10px;
margin-bottom: 20px;

`

export const Img = styled.img`
width: 50%;
heigth: 50%;
`

export const Description = styled.p`
color: #334155;
width: 50%;
line-height: 1.3;
`

export const Button = styled.button`
background: #1f81ff;
color: #ffffff;
border-style: none;
outline: none;
font-size: 13px;
border-radius: 5px;
cursor: pointer;
margin-top: 20px;
margin-bottom: 50px;
padding: 10px;
`
