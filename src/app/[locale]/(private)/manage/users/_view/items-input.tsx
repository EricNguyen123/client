import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

interface ItemsInputProps {
  idName?: string;
  type?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export default function ItemsInput({ idName, type, placeholder, label, value, onChange }: ItemsInputProps) {
  return (
    <div className="grid grid-rows-2 gap-1">
      <Label htmlFor={idName} className="flex items-center justify-start">
        {label}
      </Label>
      <Input 
        id={idName} 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={(e) => {onChange(e.target.value)}} />
    </div>
  )
}
