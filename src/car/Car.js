import CarPricing from "./CarPricing"

class Car {
  // constructor(kind) {
  //   super()
  //   Object.assign(this, CarConfig[kind])
  // }

  get pricing() {
    return CarConfig[this.model]
  }

  get base() {
    return this.pricing.base
  }

  get options() {
    return this.pricing.tinting
  }

  get totalPrice() {
    return this.base + this.options
  }
}

export default Car
