import { TextField } from "@mui/material";

export default function HoTextField(props) {
    return (
        <TextField onChange={(data) => props?.onChange(data?.target?.value)}
            value={props?.value}
            label={props?.label}
            variant={props?.variant || 'outlined'}
            className={props?.className} />
    )
}