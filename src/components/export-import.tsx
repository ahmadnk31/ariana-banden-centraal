'use client'
import React from 'react';
import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { FaTools } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { Grid } from 'lucide-react';

const ExportWorldwide: React.FC = () => {
  const tabContent = [
    {
      title: 'Quality Levels',
      description: 'Our inspected used tires with adequate tread undergo strict controls and are carefully prepared for export. We distinguish between 2-3mm (Africa) and 4-7mm (Europe) tread depths.',
      icon: '🔧',
      image: '/tyre.jpg',
      id: 'qualityLevels'
    },
    {
      title: 'Transport Support',
      description: 'We naturally support you in organizing and carrying out your transport. With our efficient packaging technique, we can fit up to three used tires in a &apos doubling &apos, tripling, and quadrupling  manner, which means containers can be loaded with up to double the number of tires.',
      icon: '📦',
      image: '/export.jpg',
      id: 'transportSupport'
    }
]
  const [activeTab, setActiveTab] = React.useState<number|null>(0);
  return (
    <div className="bg-gray-900 text-white p-8 flex flex-col md:flex-row-reverse items-center md:gap-24 gap-8">
      <div>
      <h2 className="text-3xl font-bold mb-4">Export <span className='text-red-500'>Worldwide</span></h2>
      <p className="mb-6 text-gray-400">Discover our range of certified used tires in three quality levels, available worldwide.</p>
      <div className='flex flex-col gap-4'>
      <div className='cursor-pointer' onClick={()=>setActiveTab(0)} role='button'>
       <Card className={cn('flex gap-4 bg-transparent border-none shadow-none hover:bg-gray-800 transition',activeTab===0&&'bg-gray-800')}>
         <CardHeader>
            <CardTitle className="flex items-center gap-3 md:gap-4 text-lg md:text-xl">
             <FaTools className='text-2xl text-red-500'/>
            </CardTitle>
            </CardHeader>
            <CardContent className='pt-4'>
<h1 className="flex items-center gap-3 md:gap-4 text-lg md:text-xl text-white">
                Quality Levels 
                </h1>
                <p className='text-sm md:text-base mt-2 text-gray-400'>Our inspected used tires with adequate tread undergo strict controls and are carefully prepared for export. We distinguish between 2-3mm (Africa) and 4-7mm (Europe) tread depths.</p>

            </CardContent>
       </Card>
      </div>
      <div onClick={()=>setActiveTab(1)} className='cursor-pointer'>
      <Card className={cn('flex gap-4 bg-transparent shadow-none border-none hover:bg-gray-800 transition',activeTab===1&&'bg-gray-800')}>
         <CardHeader>
            <CardTitle className="flex items-center gap-3 md:gap-4 text-lg md:text-xl">
             <Grid className='text-2xl text-red-500'/>
            </CardTitle>
            </CardHeader>
            <CardContent className='mt-4'>
<h1 className="flex items-center gap-3 md:gap-4 text-lg md:text-xl text-white">
                Quality Levels 
                </h1>
                <p className='text-sm md:text-base text-gray-400 mt-2'>We naturally support you in organizing and carrying out your transport. With our efficient packaging technique, we can fit up to three used tires in a &apos doubling, tripling, and quadrupling &apos manner, which means containers can be loaded with up to double the number of tires.</p>

            </CardContent>
       </Card>
      </div>
      </div>
      </div>
     
      <div className='lg:min-w-[400px] w-full'>
      {
        tabContent.map((tab, index) => (
            <div key={index} className={`tab-content ${activeTab === index ? 'active' : 'hidden'}`}>
               
                    <Image src={tab.image} alt={tab.title} width={500} height={500} className='rounded object-cover w-full aspect-square' />
                </div>
            ))
      }
      </div>
    </div>
  );
};

export default ExportWorldwide;