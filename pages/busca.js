import React, { Component } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import BrandsList from '../components/BrandsList'
import NavBar from '../components/Navbar'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Roboto, 'Sans-Serif';
    src: url('/static/fonts/Roboto-Regular.ttf') format("truetype");
  }
  body {
    background: #fff;
    font-family: Roboto, 'Sans-Serif';
    margin: 0;
  }
`
const Container = styled.div`
  flex-direction: column;
  display: flex;
`
const Input = styled.input`
  width: 200px;
  height: 40px;
  font-size: 16px;
  margin: 10px 0;
  border: 1px solid #eaeaea;
  border-radius: 5px;
`
const Content = styled.div`
  margin: 15px;
`
export default class Search extends Component {
  constructor(props) {
    super(props)
   
    this.state = {
      query: ""
    }
  }
  onChange(e) {
    this.setState({ query: e.target.value.toLowerCase() })
  }
  render() {
    return (
      <Container>
        <GlobalStyle />
        <NavBar />
        <Content>
          <Input onChange={this.onChange.bind(this)} />
          <BrandsList search={this.state.query} />
        </Content>
      </Container>
    )
  }
}