import React from "react"
import { Container, Title } from '../elements'

function CarModel() {
  const [model, setModel] = React.useState("Tesla")

  return (
    <Container>
      <Title>Car Model</Title>
      </Container>
  )
}

export default CarModel
