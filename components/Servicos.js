import React from 'react';
import styled from 'styled-components'
import Title from './Title'


// ESCOPO DA DIV
const Global = styled.div`
margin-top:10vh;
`
//TITULO
const Escope = styled.div`
  margin-left:2%;
  `

//ESCOPO DOS CARDS
const Content = styled.div`
  display: flex;
  flex-direction: row;
  word-wrap: break-word;
  justify-content:center;
  flex-wrap:wrap;
  margin-right:0%;

  `
// OS CARDS 
const Bordas = styled.div`
    border: 1px solid #e5d9c9;
    border-radius: 24px;
    height: 350px;
    width: 250px;
    margin:5px;
  `


class Servicos extends React.Component {
    state = {}
    render() {
        return (
            <Global>
                <Escope>
                    <Title type="h1" content="Nossos Serviços" align="left"></Title>
                </Escope>
                <Content>
                    <Bordas />
                    <Bordas />
                    <Bordas />
                    <Bordas />
                    <Bordas />
                    <Bordas />
                    <Bordas />
                    <Bordas />
                </Content>
            </Global>
        );
    }
}

export default Servicos;