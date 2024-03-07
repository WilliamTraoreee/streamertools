export type Gear = {
  id: string
  name: string
  description: string
  price: string
  image: string
  link: string
  gearCategory: string
}

export type GearByCategory = {
  [key: string]: Gear[]
}
