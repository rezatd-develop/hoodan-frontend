import clsx from "clsx";

export default function HoTextInput(props) {
  return (
    <input
      className={clsx(props?.className, 'px-2')}
      type='text'
      onChange={props?.onChange}
      placeholder={props?.placeholder}
    />
  );
}
