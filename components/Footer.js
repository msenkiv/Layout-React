import React, {Component} from 'react'
import styled from 'styled-components'
import Title from '../components/Title'

const NavFooter = styled.footer`
  background: #eee;
  padding: 40px;
`
export default class Footer extends Component {
  render() {
    return (
      <NavFooter>
        <Title type='h2' content='Footer' family='Roboto' color='#333' />
      </NavFooter>
    )
  }
}