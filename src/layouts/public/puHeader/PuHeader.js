import { isMobile } from '@/utilities/CommonHelper';
import PuBottomHeader from './PuBottomHeader';
import PuTopHeader from './PuTopHeader';

export default function PuHeader() {
  return (
    <div className='mt-3'>
      <PuTopHeader />
      {!isMobile() && <PuBottomHeader />}
    </div>
  );
}
