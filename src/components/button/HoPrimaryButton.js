import clsx from "clsx";

export default function HoPrimaryButton(props) {
    return <button className={clsx(props?.className, 'HoPrimaryButton py-2 px-4 white-space')}>
        {props?.children}
    </button>;
} 