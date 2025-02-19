'use client'

import clsx from 'clsx';
import HoBlogCard from '../../../components/card/HoBlogCard';
import { useIsMobile } from '@/utilities/CommonHelper';

export default function HomeContentRow(props) {
    const isMobile = useIsMobile();
    let showColumnMode = isMobile && props?.showColumnMode;

    return <div className="px-lg-5 px-md-5 px-sm-4 px-4">
        <div className="font-size-26 mb-4">Featured</div>
        <div className={clsx(showColumnMode && "flex-column", "d-flex row")}>
            <HoBlogCard containerClassName='col-3' description='Hoodan editorial' title='11 Must-See Shows during Frieze Los Angeles' />
            <HoBlogCard containerClassName='col-3' description='Hoodan editorial' title='11 Must-See Shows during Frieze Los Angeles' />
        </div>
    </div>
}