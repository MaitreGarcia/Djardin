
export async function fetchFlowers(): Promise<Flower[]> {
  // We put a fake fetch here

  return [
    {
      name: 'Rose',
      scheme: 'monthly',
      last_watered: new Date()
    }
  ]
}
