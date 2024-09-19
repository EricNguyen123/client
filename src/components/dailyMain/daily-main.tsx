import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { weekday } from "@/constants/weekday"
import { useTranslations } from 'next-intl';
import ItemCard from './item-card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function DailyMain() {
  const t = useTranslations('Weekday');
  const tr = useTranslations('DailyMainBtn');
  return (
    <div className="w-full mt-5 flex flex-col">
      <Tabs defaultValue={weekday[0]} className="w-full">
        <TabsList className="w-full bg-transparent mb-2">
          {weekday.map((day, i) => 
            <TabsTrigger  
              key={i} 
              value={day}
              className='w-[120px] rounded-full hover:text-sky-500 font-semibold text-xl data-[state=active]:bg-sky-500 data-[state=active]:text-white'
            >
              {t(day)}
            </TabsTrigger>)}
        </TabsList>
        {weekday.map((day, i) => 
          <TabsContent 
            key={i} 
            value={day} 
            className="grid grid-flow-row gap-1 grid-cols-5 mt-0"
          >
            <ItemCard type='medium'/>
            {
              Array.from({ length: 8 }).map((_, index) => (
                <ItemCard key={index}/>
              ))
            }
          </TabsContent>
        )}
      </Tabs>
      <div className='w-full flex justify-center items-center mt-3'>
        <Button asChild variant={"ghost"} className='rounded-full hover:text-sky-500'>
          <Link href="/"><ChevronDown className='mr-2'/> {tr('more')}</Link>
        </Button>
      </div>
    </div>
  )
}
