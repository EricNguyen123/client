"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface RaidoMenuProps {
  init: string;
  items: string[];
  menuLabel: string;
  setValue: (value: string) => void;
}
export function RadioMenu({ init, items, menuLabel, setValue}: RaidoMenuProps) {
  const [position, setPosition] = React.useState(init)
  React.useEffect(() => {
    setValue(position)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position])
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="capitalize">{position}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-max">
        <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {items.map((item, index) => 
            <DropdownMenuRadioItem value={item} key={index} className="capitalize">{item}</DropdownMenuRadioItem>
          )}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
