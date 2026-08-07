import { Label } from "../../shared/components/Label"

export function FlowerLabel({ flower }: { flower: Flower }) {
  if (flower.wateringState === 'dry') {
    return (
      <Label>
        Dry
      </Label>
    )
  }
  if (flower.wateringState === 'drying') {
    return (
      <Label>
        Drying
      </Label>
    )
  }

  return (
    <Label>
      Wet
    </Label>
  )
}


export function Flower({ flower }: { flower: Flower }) {
  return (
    <div className="w-full rounded-xl p-2 bg-white flex flex-col gap-2">
      <img src={flower.image} className="h-50 w-full object-cover rounded-xl" loading="lazy" />
      <h5 className="text-xl font-semibold">
        {flower.name}
      </h5>
      <FlowerLabel flower={flower} />
    </div>
  )
}

export function Flowers({ flowers }: { flowers: Flower[] }) {
  return flowers.map((flower) => (
    <Flower key={flower.name} flower={flower} />
  ))
}
