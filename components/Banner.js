import React, { Component } from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  display: ${props => props.display};
`
const Video = styled.video`
  width: ${props => props.width};
  height: ${props => props.height};
`
export default class Banner extends Component {
  render() {
    const { type, src, alt, width, height, margin, display } = this.props
    switch(type) {
      default:
        return <Image src={src} width={width} height={height} alt={alt} margin={margin} display={display} />
      case 'video':
        return <Video controls src={src} width={width} height={height} />
    }
  }
}