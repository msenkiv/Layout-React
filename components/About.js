import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import Conteudo from '../components/Conteudo'
import Textos from '../components/mocks/Textos'
import Button from './Button'


const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  word-wrap: break-word;
  justify-content:center;
  flex-wrap:wrap;
  margin-bottom: 0;
 
`;

const ContImg = styled.div`
  height: 100%;
  word-wrap: break-word;
  flex:1;
`
const DivButton = styled.div`

`

const Text = styled.div`
  height: 200px;
  overflow: hidden;
  width: 100%;
`

const Imagemzorde = styled.div`
background: #9999;
height: 10%;
border-width:10px;
margin:10px;
flex:1;
padding:15vh;
`

export default class Brands extends Component {
  render() {
    return (
      <div>
        <AboutContent className="container">
          <ContImg>
            <Title type='h2' content='Sobre a Octopus' family='Roboto, Sans-Serif' color='#666' transform='' align='left' padding='' />
            <Text><Conteudo content={<Textos />} color="#999"></Conteudo></Text>
          </ContImg>
          <ContImg>
            <Imagemzorde />
          </ContImg>
        </AboutContent>
        <DivButton><Button /> </DivButton>
        

      </div>
    )
  }
}


/*

          <Content>
            <Title type='h1' content='About' color='#666' transform='uppercase' align='left' />
            <Conteudo content={<Textos />}></Conteudo>
          </Content>
*/