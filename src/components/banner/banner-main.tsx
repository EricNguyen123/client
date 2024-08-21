import React from 'react'
import BannerHome from './banner-home'
import { Card, CardContent } from '../ui/card'

export default function BannerMain() {
  return (
    <div className="w-full h-[350px] flex justify-between items-center">
      <div className='w-[79%]'>
        <BannerHome/>
      </div>
      <div className="w-[20%] h-full flex flex-col justify-between items-center">
        <Card className="w-full h-[58%] flex justify-center items-center">
          <CardContent className="w-full flex aspect-square items-center justify-center p-6">
            <span className="text-4xl font-semibold">{ 1}</span>
          </CardContent>
        </Card>
        <Card className="w-full h-[40%] flex justify-center items-center">
          <CardContent className="w-full flex aspect-square items-center justify-center p-6">
            <span className="text-4xl font-semibold">{ 1}</span>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
