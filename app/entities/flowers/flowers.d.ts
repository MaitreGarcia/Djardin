type WateringScheme = 'weekly' | 'daily' | 'monthly' | 'yearly' | 'bi-weekly'

type Flower = {
  name: string,
  scheme: WateringScheme
  last_watered: Date
  image?: string
}
