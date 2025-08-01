import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import FadeTransition from "./FadeTransition"; // Импортируем компонент

export const SimpleModalMUIWithFade: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button variant="outlined" onClick={() => setOpen(true)}>
                Открыть модалку
            </Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                TransitionComponent={FadeTransition} // Указываем анимацию здесь
            >
                <DialogTitle>Это модальное окно с анимацией</DialogTitle>
                <DialogContent>Здесь можно разместить любую информацию.</DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Закрыть</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
