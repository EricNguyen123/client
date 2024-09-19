import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useCategory } from '@/constants/category';

export default function SelectCategory() {
  const components = useCategory()
  const onSelectChange = () => {
    
  };
  return (
    <Select defaultValue={'0'} onValueChange={onSelectChange}>
      <SelectTrigger className="w-max h-full border-[0px] bg-transparent focus:ring-0 shadow-none text-sm font-semibold text-sky-500 p-0">
        <SelectValue placeholder="Genre"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Genre</SelectLabel>
          {components.map((component, index) => 
            <SelectItem key={index} value={`${index}`}>{component.title}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
