import React, { Component } from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-family: ${props => props.family};
  font-size: 24px;
  font-weight: ${props => props.weight};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.15;
  letter-spacing: -0.1px;
  color: ${props => props.color};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  text-transform: ${props => props.transform};
  text-align: ${props => props.align};
`
const H2 = styled.h2`
  font-family: ${props => props.family};
  font-size: 22px;
  font-weight: ${props => props.weight};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.15;
  letter-spacing: -0.1px;
  color: ${props => props.color};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  text-transform: ${props => props.transform};
  text-align: ${props => props.align};
`
const H3 = styled.h3`
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
  text-align: ${props => props.align};
`
const H4 = styled.h4`
  font-family: ${props => props.family};
  font-size: 16px;
  font-weight: ${props => props.weight};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.15;
  letter-spacing: -0.1px;
  color: ${props => props.color};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  text-transform: ${props => props.transform};
  text-align: ${props => props.align};
`
const H5 = styled.h5`
  font-family: ${props => props.family};
  font-size: 14px;
  font-weight: ${props => props.weight};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.15;
  letter-spacing: -0.1px;
  color: ${props => props.color};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  text-transform: ${props => props.transform};
  text-align: ${props => props.align};
`
const H6 = styled.h6`
  font-family: ${props => props.family};
  font-size: 11px;
  font-weight: ${props => props.weight};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.15;
  letter-spacing: -0.1px;
  color: ${props => props.color};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  text-transform: ${props => props.transform};
  text-align: ${props => props.align};
`
export default class Title extends Component {
  render() {
    const { type, family, weight, content, size, color, margin, padding, align, id, transform } = this.props
    switch(type) {
      default:
        return <H1 id={id} family={family} weight={weight} size={size} color={color} margin={margin} padding={padding} align={align} transform={transform}>{content}</H1>
      case 'h2':
        return <H2 id={id} family={family} weight={weight} size={size} color={color} margin={margin} padding={padding} align={align} transform={transform}>{content}</H2>
      case 'h3':
        return <H3 id={id} family={family} weight={weight} size={size} color={color} margin={margin} padding={padding} align={align} transform={transform}>{content}</H3>
      case 'h4':
        return <H4 id={id} family={family} weight={weight} size={size} color={color} margin={margin} padding={padding} align={align} transform={transform}>{content}</H4>
      case 'h5':
        return <H5 id={id} family={family} weight={weight} size={size} color={color} margin={margin} padding={padding} align={align} transform={transform}>{content}</H5>
      case 'h6':
        return <H6 id={id} family={family} weight={weight} size={size} color={color} margin={margin} padding={padding} align={align} transform={transform}>{content}</H6>
    }
  }
}