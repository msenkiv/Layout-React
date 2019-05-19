import React, { Component } from 'react'
import styled from 'styled-components'
import Cards from './Cards'


const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  word-wrap: break-word;
  justify-content:center;
  flex-wrap:wrap;
  margin-bottom: 0;
  margin-top:10vh;
 
`;


export default class Brands extends Component {
  render() {
    return (
      <div>
        <AboutContent>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>    
        </AboutContent>

      </div>
    )
  }
}
