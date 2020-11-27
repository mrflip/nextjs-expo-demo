import CarPricing from "./CarPricing"

class Car {
  // constructor(kind) {
  //   super()
  //   Object.assign(this, CarConfig[kind])
  // }

  get pricing() {
    return CarPricing[this.model]
  }

  get base() {
    return this.pricing.base
  }

  get options() {
    return this.pricing.tinting
  }

  get price() {
    return this.base + this.options
  }
}

export default Car
