import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import Imagem from '../static/images/background.png'
import Banner from '../components/Banner'
import About from '../components/About'
import Servicos from '../components/Servicos'
import Precos from '../components/Precos'
import Diagnostico from '../components/Diagnostico'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Nunito, 'Sans-Serif';
    src: url('/static/fonts/Nunito-Regular.ttf') format("truetype");

  }
  body {
    background: #fff;
    font-family: Nunito, 'Sans-Serif';
    margin: 0;
  }
`
const Container = styled.div`
  flex-direction: column;
  justify-content: center;
  display: flex;
  margin:10%;
`
const Description = styled.div`
  font-family: Roboto, 'Sans-Serif';
  font-size: 16px;
  color: #222;
  text-align: center;
  padding: 0 40px;
`
const GroupSocial = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
`
const IconSocial = styled.img`
  width: 38px;
  height: 36px;
`
const NameSocial = styled.a`
  font-family: Roboto, 'Sans-Serif';
  font-size: 16px;
  color: #222;
  margin: 40px 15px 40px 10px; 
  cursor: pointer;
  text-decoration: none;
`

export default class Index extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <Banner src={Imagem} width="100vw" height="50vh" />
      <Container>
        <GlobalStyle />
        <About />  
        <Servicos/>    
        <Precos/>
        <Diagnostico/>  
        <Container />
        <Footer />
      </Container>
      </div>
    )
  }
}
