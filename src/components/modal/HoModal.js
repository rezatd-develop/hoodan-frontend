'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { isCultureEn } from '@/utilities/CommonHelper';

export default function HoModal(props) {
    const [open, setOpen] = React.useState(props?.open);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        props?.modalClosed()
    };

    React.useEffect(() => {
        setOpen(props?.open)
    }, [props?.open])

    return (
        <div>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth={props?.maxWidth}
                fullWidth
                className={clsx(isCultureEn() ? "unica-font" : "yekan-bakh-bold-font")}
            >
                <DialogTitle className={clsx(props?.dialogTitleClassName, 'p-0')} id="customized-dialog-title">
                    {props?.title}
                </DialogTitle>
                <IconButton
                    className='p-2'
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers className='border-0'>
                    {props?.children}
                </DialogContent>
                {/* <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions> */}
            </Dialog>
        </div>
    );
}
