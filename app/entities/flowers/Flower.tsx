


export function Flowers({ flowers }: { flowers: Flower[] }) {
  return (
    <div>
      {flowers.map((el) => el.name)}
    </div>
  )
}
