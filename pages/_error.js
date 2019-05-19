import React, { Component } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const Container = styled.div`
  
`
export default class ErrorPage extends Component {
  render() {
    return (
      <Container>
        <Helmet>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <title>Walmart - Página de Erro 404</title>
          <meta property="og:title" content="Walmart - Página de Erro 404" />
          <meta name="description" content="Página não encontrada" />
          <meta property="og:description" content="Página não encontrada" />
          <meta name="viewport" content="width=device-width,user-scalable=no" />
        </Helmet>
        Error 404
      </Container>
    )
  }
}