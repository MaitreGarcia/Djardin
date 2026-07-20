type WateringScheme = 'weekly' | 'daily' | 'monthly' | 'yearly'

type Flower = {
  name: string,
  scheme: WateringScheme
  last_watered: Date
}
