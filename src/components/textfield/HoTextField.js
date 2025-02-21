import { TextField } from "@mui/material";

export default function HoTextField(props) {
    return (
        <TextField label={props?.label} variant={props?.variant || 'outlined'} className={props?.className}/>
    )
}