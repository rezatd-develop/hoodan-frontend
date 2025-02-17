'use client'

import { useIsMobile } from '@/utilities/CommonHelper';
import PuBottomHeader from './PuBottomHeader';
import PuTopHeader from './PuTopHeader';

export default function PuHeader() {
  const isMobile = useIsMobile();

  return (
    <div className='mt-2'>
      <PuTopHeader />
      {!isMobile && <PuBottomHeader />}
    </div>
  );
}
