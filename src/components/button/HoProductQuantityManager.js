'use client'

import clsx from "clsx";
import { useEffect, useState } from "react";

export default function HoProductQuantityManager(props) {
    const [quantity, setQuantity] = useState(props?.initialQuantity);

    useEffect(() => {
        props?.quantityChanged(quantity)
    }, [quantity])

    return <div className={clsx(props?.className, "d-flex align-items-stretch")}>

        <button onClick={() => setQuantity(0)}
            className='HoProductQuantityManagerButton-delete py-2 px-4 white-space'>
            <i class="bi bi-trash3 text-white p-0 m-0"></i>
        </button>

        <button onClick={() => quantity > 0 && setQuantity(quantity - 1)}
            className='HoProductQuantityManagerButton-minus py-2 px-4 white-space'>
            -
        </button>

        <input type="text" className="HoProductQuantityManagerButton-input text-center w-100"
            value={quantity} onChange={(e) => setQuantity(e.target.value)} />

        <button onClick={() => setQuantity(quantity + 1)}
            className='HoProductQuantityManagerButton-plus py-2 px-4 white-space'>
            +
        </button>

    </div>
} 