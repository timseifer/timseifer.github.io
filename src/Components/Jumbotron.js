import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../Assets/waves.gif';
const Styles = styled.div`
.Jumbo{
    background: url(${Logo}) no-repeat fixed bottom;
    background-size cover;
    color: #efefef;
    height: 275px;
    position: relative;
    z-index: -2;    
}

.overlay{
    margin: auto;
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}

`;

export const Jumbotron = () => (
    <Styles>
    <Jumbo fluid className="Jumbo">
        <div className="overlay"></div>
        <Container>
        <h1>Welcome</h1>
        <p>Hello, my name is Tim Seifert</p>
        </Container>
    </Jumbo>    
    </Styles>
)