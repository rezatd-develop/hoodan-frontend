import clsx from "clsx";

export default function HoProductQuantityManager(props) {
    return <div>
        <button onClick={props?.onClick}
            className={clsx(props?.className, 'HoPrimaryButton py-2 px-4 white-space')}>
            {props?.children}
        </button>
    </div>
} 