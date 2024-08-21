"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import React, { useEffect } from "react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "../ui/button"

export default function BannerHome() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  )

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleSelect = (index: number) => {
    api?.scrollTo(index)
    setCurrent(index)
  }
 
  return (
    <div className="w-full h-full">
      <Carousel plugins={[plugin.current]} setApi={setApi} className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="w-full h-[350px]">
                <CardContent className="w-full h-full flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-2 left-0 right-10 flex justify-end space-x-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Button
              variant={"outline"}
              key={index}
              onClick={() => handleSelect(index)}
              className={`w-3 h-3 p-0 rounded-full ${index === current ? 'bg-sky-500' : 'bg-transparent'}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  )
}
