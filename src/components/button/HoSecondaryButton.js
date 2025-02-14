import clsx from "clsx";

export default function HoSecondaryButton(props) {
    return <button className={clsx(props?.className, 'HoSecondaryButton py-2 px-4 white-space')}>
        {props?.children}
    </button>;
}