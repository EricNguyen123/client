import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { weekday } from "@/constants/weekday"
import { useTranslations } from 'next-intl';

export default function DailyMain() {
  const t = useTranslations('Weekday');
  return (
    <div className="w-full mt-5">
      <Tabs defaultValue={weekday[0]} className="w-full">
        <TabsList className="w-full bg-transparent">
          {weekday.map((day, i) => 
            <TabsTrigger  
              key={i} 
              value={day}
              className='w-[120px] rounded-full hover:text-sky-500 font-semibold text-xl data-[state=active]:bg-sky-500 data-[state=active]:text-white'
            >
              {t(day)}
            </TabsTrigger>)}
        </TabsList>
        {weekday.map((day, i) => <TabsContent key={i} value={day}>Make changes to your account here.</TabsContent>)}
      </Tabs>
    </div>
  )
}
