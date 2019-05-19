import React, { Component } from 'react'
import styled from 'styled-components'

const P = styled.p`
  font-family: ${props => props.family};
  font-size: 18px;
  font-weight: ${props => props.weight};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.15;
  letter-spacing: -0.1px;
  color: ${props => props.color};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  text-transform: ${props => props.transform};
`

export default class Conteudo extends Component {
  render() {
    const { type, family, weight, content, size, color, margin, padding, align, id, transform } = this.props

    return <P family={family} weight={weight} size={size} color={color}> {content}</P>
  }
}