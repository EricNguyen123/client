"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import ItemCard from '../dailyMain/item-card'
import { useTranslations } from 'next-intl'
import ListItem from './list-item'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import SelectCategory from './select-category'

export default function NewStory() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const t = useTranslations('DailyMainBtn');
 
  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
 
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  
  return (
    <Card className='w-full flex flex-col justify-center items-center mt-5'>
      <CardHeader>
        <CardTitle className='text-xl'>{t('newStory')}</CardTitle>
      </CardHeader>
      <CardContent className='w-[95%]'>
        <Carousel plugins={[plugin.current]} setApi={setApi} className="w-full">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/5">
                <div className="p-1">
                  <ItemCard/>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant={"ghost"}/>
          <CarouselNext variant={"ghost"}/>
        </Carousel>
        <div className='w-full mt-10 grid gap-8 grid-cols-2 pb-20'>
          <div className='w-full flex flex-col justify-start items-center'>
            <div className='w-full flex justify-start items-center mt-5 border-b border-gray-300 pt-1 pb-3'>
              <Link href={""} className='flex justify-center items-center text-xl font-semibold'>
                New & Trending <ChevronRight className='ml-2'/>
              </Link>
            </div>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
          </div>
          <div className='w-full flex flex-col justify-start items-center'>
            <div className='w-full flex justify-between items-center mt-5 border-b border-gray-300 pt-1 pb-3'>
              <Link href={""} className='flex justify-center items-center text-xl font-semibold'>
                ORIGINALS by Genre <ChevronRight className='ml-2'/>
              </Link>
              <SelectCategory/>
            </div>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
