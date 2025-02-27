import clsx from "clsx";

export default function HoPrimaryButton(props) {
    return <button onClick={props?.onClick} className={clsx(props?.className, 'HoPrimaryButton py-2 px-4 white-space')}>
        {props?.children}
    </button>;
} 