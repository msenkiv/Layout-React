import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import Conteudo from '../components/Conteudo'
import Textos from '../components/mocks/Textos'
import Forms from '../components/Forms'

const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  word-wrap: break-word;
  justify-content:center;
  flex-wrap:wrap;
  margin-bottom: 0;
 
`;

const ContForm = styled.div`
  height: 100%;
  flex:1;
`
const DivButton = styled.div`

`

const Text = styled.div`
  margin-top:10vh;
  overflow: hidden;
  height: 200px;
  width: 100%;
`

export default class Diagnostico extends Component {
  render() {
    return (
        <AboutContent>
          <ContForm>
            <Text><Conteudo content={<Textos />} color="#999"></Conteudo></Text>
          </ContForm>
          <ContForm>
            <Forms />
          </ContForm>
        </AboutContent>
    )
  }
}
