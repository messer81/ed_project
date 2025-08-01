import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

export const SimpleModalMUI: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button variant="outlined" onClick={() => setOpen(true)}>
                Открыть модалку
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Это модальное окно</DialogTitle>
                <DialogContent>Здесь можно разместить любую информацию.</DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Закрыть</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
