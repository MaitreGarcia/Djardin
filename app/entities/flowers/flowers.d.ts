type WateringScheme = 'weekly' | 'daily' | 'monthly' | 'yearly' | 'bi-weekly'
type WateringState = 'dry' | 'wet' | 'drying'

type Flower = {
  name: string,
  scheme: WateringScheme
  last_watered: Date
  image?: string
  wateringState: WateringState
}
