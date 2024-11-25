'use client';
import { Swap } from '@dodoex/widgets';
import Widget from './Widget';

export default function SwapWidget() {
  return (
    <div className="px-2 py-[10px] rounded-[20px] border border-paperDarkContrast bg-paperDarkContrast backdrop-blur">
      <div className="relative pb-2 border border-paperDarkContrast bg-paper overflow-hidden w-full md:w-[500px] h-[494px] rounded-2xl z-10">
        <Widget>
          <Swap />
        </Widget>
      </div>
    </div>
  );
}
