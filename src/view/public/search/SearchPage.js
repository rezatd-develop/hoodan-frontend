'use client'

import { useSearchParams } from "next/navigation"
import { PublicSearchService } from "../../../services/Api's/public/search/publicSearchRoutes";
import { useEffect, useState } from "react";
import HoMessageClassModal from "@/components/modal/HoMessageClassModal";
import HoArtItemCard from '../../../components/card/HoArtItemCard';
import { useIsMobile } from "@/utilities/CommonHelper";

export default function SearchPage() {
    const searchParams = useSearchParams()
    const search = searchParams.get('searchText');
    const [searchedItems, setSearchedItems] = useState([]);
    const [showMessageClassModal, setShowMessageClassModal] = useState(false);
    const [messageClass, setMessageClass] = useState('');
    const isMobile = useIsMobile();

    useEffect(() => {
        PublicSearchService({ q: search }, publicSearchCallback)
    }, [search]);

    const publicSearchCallback = (data) => {
        if (data?.HasError) {
            setMessageClass(data?.message);
            setShowMessageClassModal(true)
        } else {
            setSearchedItems(data?.data)
        }
    }

    return <div>
        {searchedItems?.length > 0 ? searchedItems?.map((item, index) =>
            <HoContentCard containerClassName={clsx(isMobile ? 'col-10' : 'col-3', 'mb-5')}
                key={index}
                img={item?.images[0]}
                description={item?.mainDescription}
                title={item?.title}
                secondDescription={item?.primaryDescription}
                price={item?.price}
            />
        )
            : <div className="text-center my-5">No Result</div>}
        {
            showMessageClassModal &&
            <HoMessageClassModal open={showMessageClassModal}
                modalClosed={() => setShowMessageClassModal(false)}>
                {messageClass}
            </HoMessageClassModal>
        }
    </div>
}