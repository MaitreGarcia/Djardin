import { useState } from "react";
import { Label } from "../shared/components/Label";

export function CommonFilter({ children, label }: { children: React.ReactNode, label?: string }) {
  return (
    <div>
      {
        label && (
          <label className="block mb-2.5 text-sm font-medium text-heading">{label}</label>
        )
      }
      {children}
    </div>
  )
}

/* Filter the flowers by watered status */
type WateringState = 'all' | 'dry' | 'wet' | 'drying'
export function FlowerWateredFilter() {
  const [selected, useSelected] = useState('all')
  const options: WateringState[] = ['all', 'dry', 'wet', 'drying'];

  const handleClick = (option: string) => {
    if (option === selected) {
      return useSelected('all')
    }
    useSelected(option)
  }

  return (
    <div className="flex flex-row gap-2">
      {
        options.map((el) =>
          <Label
            onClick={() => handleClick(el)}
            variant={selected === el ? 'warning' : 'success'}
            className="capitalize"
            selected={selected === el}
            elevated
          >
            {el}
          </Label>
        )
      }
    </div>
  )
}

type FlowerFilterOptions = {
  wateringState: WateringState
}
export function FlowerFilter() {
  return (
    <CommonFilter>
      <FlowerWateredFilter />
    </CommonFilter>
  )
}

