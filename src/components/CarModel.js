import React from "react"
import { Container, Paragraph, RadioButton, Title } from "../elements"
import Car from "../car/Car"

function CarModel() {
  const [model, setModel] = React.useState("Tesla")
  const car = new Car()
  car.model = model

  return (
    <Container style={{ width: "100%" }}>
      <Title>Car Model: {model}</Title>
      <Paragraph>Price: {car.price}</Paragraph>
      <Container>
        <RadioButton.Group onValueChange={(value) => setModel(value)} value={model}>
          <RadioButton.Item label="Tesla" value="Tesla" />
          <RadioButton.Item label="Ford" value="Ford" />
          <RadioButton.Item label="Bugatti" value="Bugatti" />
        </RadioButton.Group>
      </Container>
    </Container>
  )
}

export default CarModel
