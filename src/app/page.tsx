'use client';
import Image from 'next/image';
import AppModule from './app.module';
import { Slider1 } from './lib/components/slider';

import 'swiper/css';

export default function Home() {
  return (
    <div className="w-full ">
      <Slider1 />
    </div>
  );
}
